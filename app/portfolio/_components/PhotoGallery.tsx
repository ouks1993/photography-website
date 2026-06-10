"use client";

import { useState, useRef } from "react";
import Image from "@/components/Photo";
import { LocalPhoto } from "@/lib/photos";

const ZOOM = 1.6; // magnifier zoom factor
const LENS = 280; // lens diameter in px

// Lighter, pre-optimized source for the magnifier background so repaints
// stay smooth even for very large originals (some are 9+ MB / 10000px wide).
function magnifierSrc(src: string) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=2048&q=100`;
}

export default function PhotoGallery({ photos }: { photos: LocalPhoto[] }) {
  const [lightbox, setLightbox] = useState<LocalPhoto | null>(null);
  const [lens, setLens] = useState({ show: false, x: 0, y: 0, bgX: 0, bgY: 0, w: 0, h: 0 });
  const wrapRef = useRef<HTMLDivElement>(null);

  const noContext = (e: React.MouseEvent) => e.preventDefault();

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const img = wrapRef.current?.querySelector("img");
    if (!img) return;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Hide lens when cursor leaves the actual image bounds
    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      setLens((l) => ({ ...l, show: false }));
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

  function openLightbox(photo: LocalPhoto) {
    setLens({ show: false, x: 0, y: 0, bgX: 0, bgY: 0, w: 0, h: 0 });
    setLightbox(photo);
  }

  return (
    <>
      {/* Masonry grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20" style={{ columnGap: "1rem" }}>
        <div className="[columns:1] md:[columns:2] lg:[columns:3]">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className="break-inside-avoid mb-4 group relative cursor-pointer overflow-hidden bg-warm-gray select-none"
              onClick={() => openLightbox(photo)}
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
                priority={i < 3}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black/50 text-white text-[10px] tracking-widest uppercase px-2 py-1 font-sans">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox with magnifier */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8 select-none"
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
            Hover to magnify
          </p>
          <div
            ref={wrapRef}
            className="relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
            onMouseMove={handleMove}
            onMouseLeave={() => setLens((l) => ({ ...l, show: false }))}
            onContextMenu={noContext}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={2400}
              height={1800}
              quality={100}
              draggable={false}
              onContextMenu={noContext}
              sizes="100vw"
              className={`object-contain max-h-[85vh] w-auto max-w-full select-none ${lens.show ? "cursor-none" : ""}`}
            />
          </div>

          {/* Magnifier lens — uses the full-resolution original */}
          {lens.show && (
            <div
              className="pointer-events-none fixed rounded-full border-2 border-white/70 shadow-2xl hidden md:block"
              style={{
                left: lens.x,
                top: lens.y,
                width: LENS,
                height: LENS,
                backgroundImage: `url(${magnifierSrc(lightbox.src)})`,
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
