"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import Image from "@/components/Photo";
import { LocalPhoto, Collection, collections } from "@/lib/photos";

const ZOOM = 1.6; // magnifier zoom factor
const LENS = 280; // lens diameter in px

// Lighter, pre-optimized source for the magnifier background so repaints
// stay smooth even for very large originals (some are 9+ MB / 10000px wide).
function magnifierSrc(src: string) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=2048&q=100`;
}

export default function PhotoGallery({ photos }: { photos: LocalPhoto[] }) {
  const [filter, setFilter] = useState<Collection | "all">("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [lens, setLens] = useState({ show: false, x: 0, y: 0, bgX: 0, bgY: 0, w: 0, h: 0 });
  const wrapRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => (filter === "all" ? photos : photos.filter((p) => p.collection === filter)),
    [photos, filter]
  );

  const current = lightbox !== null ? filtered[lightbox] : null;

  const noContext = (e: React.MouseEvent) => e.preventDefault();

  const hideLens = useCallback(() => setLens((l) => (l.show ? { ...l, show: false } : l)), []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setLightbox((idx) =>
        idx === null ? idx : (idx + dir + filtered.length) % filtered.length
      );
      hideLens();
    },
    [filtered.length, hideLens]
  );

  // Keyboard navigation while the lightbox is open
  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, step]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const img = wrapRef.current?.querySelector("img");
    if (!img) return;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      hideLens();
      return;
    }
    const bgW = rect.width * ZOOM;
    const bgH = rect.height * ZOOM;
    setLens({
      show: true,
      x: e.clientX - LENS / 2,
      y: e.clientY - LENS / 2,
      bgX: -(x * ZOOM - LENS / 2),
      bgY: -(y * ZOOM - LENS / 2),
      w: bgW,
      h: bgH,
    });
  }

  function openLightbox(index: number) {
    hideLens();
    setLightbox(index);
  }

  return (
    <>
      {/* Collection filters */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-2 mb-10">
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-warm-gray pb-4">
          {collections.map((c) => (
            <button
              key={c.key}
              onClick={() => {
                setFilter(c.key);
                setLightbox(null);
              }}
              className={`text-xs tracking-[0.25em] uppercase font-sans transition-colors pb-1 border-b ${
                filter === c.key
                  ? "text-charcoal border-charcoal"
                  : "text-muted border-transparent hover:text-charcoal"
              }`}
            >
              {c.label}
            </button>
          ))}
          <span className="ml-auto hidden md:inline text-xs text-muted font-sans self-center">
            {filtered.length} photographs
          </span>
        </div>
      </div>

      {/* Masonry grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20" style={{ columnGap: "1rem" }}>
        <div className="[columns:1] md:[columns:2] lg:[columns:3]">
          {filtered.map((photo, i) => (
            <div
              key={photo.src}
              className="break-inside-avoid mb-4 group relative cursor-pointer overflow-hidden bg-warm-gray select-none"
              onClick={() => openLightbox(i)}
              onContextMenu={noContext}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={1000}
                draggable={false}
                onContextMenu={noContext}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105 select-none pointer-events-none"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                preload={i < 3}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-serif italic">{photo.title}</p>
                <p className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-sans mt-0.5">
                  {photo.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {current && lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 md:p-8 select-none"
          onClick={() => setLightbox(null)}
          onContextMenu={noContext}
        >
          <button
            className="absolute top-6 right-6 z-10 text-white/60 hover:text-white transition-colors text-sm tracking-widest uppercase font-sans"
            onClick={() => setLightbox(null)}
          >
            Close ×
          </button>
          <p className="absolute top-7 left-6 z-10 text-white/40 text-[11px] tracking-widest uppercase font-sans hidden md:block">
            Hover to magnify · ← → to browse
          </p>

          {/* Prev / Next */}
          <button
            aria-label="Previous photograph"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors text-4xl font-light px-3 py-6"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            ←
          </button>
          <button
            aria-label="Next photograph"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors text-4xl font-light px-3 py-6"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            →
          </button>

          <div
            ref={wrapRef}
            className="relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
            onMouseMove={handleMove}
            onMouseLeave={hideLens}
            onContextMenu={noContext}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={2400}
              height={1800}
              quality={100}
              draggable={false}
              onContextMenu={noContext}
              sizes="100vw"
              className={`object-contain max-h-[78vh] w-auto max-w-full select-none ${lens.show ? "cursor-none" : ""}`}
            />
          </div>

          {/* Caption */}
          <div
            className="mt-5 text-center max-w-2xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-serif italic text-xl md:text-2xl text-white font-light">
              {current.title}
            </p>
            <p className="text-white/50 text-xs md:text-sm mt-1 font-sans">
              {current.latin && <em className="font-serif text-white/60">{current.latin}</em>}
              {current.latin && <span className="mx-2">·</span>}
              <span className="tracking-[0.2em] uppercase text-[11px]">{current.location}</span>
            </p>
            <p className="text-white/30 text-[11px] tracking-[0.3em] font-sans mt-3">
              {lightbox + 1} / {filtered.length}
            </p>
          </div>

          {/* Magnifier lens — uses a pre-optimized 2048px source */}
          {lens.show && (
            <div
              className="pointer-events-none fixed rounded-full border-2 border-white/70 shadow-2xl hidden md:block"
              style={{
                left: lens.x,
                top: lens.y,
                width: LENS,
                height: LENS,
                backgroundImage: `url(${magnifierSrc(current.src)})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${lens.w}px ${lens.h}px`,
                backgroundPosition: `${lens.bgX}px ${lens.bgY}px`,
              }}
            />
          )}
        </div>
      )}
    </>
  );
}
