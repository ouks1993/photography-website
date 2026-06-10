"use client";

import { useState } from "react";
import { Photo500px } from "@/lib/500px";

const CATEGORY_MAP: Record<number, string> = {
  0: "Uncategorized",
  7: "People",
  8: "Landscapes",
  9: "City & Architecture",
  11: "Wildlife",
  14: "Abstract",
  15: "Macro",
  17: "Sport",
  18: "Black & White",
  21: "Travel",
};

function categoryLabel(cat: number) {
  return CATEGORY_MAP[cat] ?? "Other";
}

const FILTERS = ["All", "Wildlife", "Landscapes", "Other"];

function filterCategory(photo: Photo500px, filter: string): boolean {
  if (filter === "All") return true;
  if (filter === "Wildlife") return photo.category === 11;
  if (filter === "Landscapes") return photo.category === 8;
  return photo.category !== 11 && photo.category !== 8;
}

type LightboxPhoto = Photo500px;

export default function PhotoGallery({ photos }: { photos: Photo500px[] }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<LightboxPhoto | null>(null);

  const filtered = photos.filter((p) => filterCategory(p, activeFilter));

  return (
    <>
      {/* Filter */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 flex flex-wrap gap-4">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`text-xs tracking-[0.2em] uppercase px-4 py-2 border transition-colors ${
              activeFilter === f
                ? "border-charcoal bg-charcoal text-cream"
                : "border-warm-gray text-muted hover:border-charcoal hover:text-charcoal"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div
        className="max-w-7xl mx-auto px-6 md:px-12 pb-20"
        style={{ columnGap: "1rem" }}
      >
        <div className="[columns:1] md:[columns:2] lg:[columns:3]">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              className="break-inside-avoid mb-4 group relative cursor-pointer overflow-hidden"
              onClick={() => setLightbox(photo)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.image_url}
                alt={photo.name}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white/70 text-xs tracking-widest uppercase mb-1 font-sans">
                  {photo.location ?? categoryLabel(photo.category)}
                </p>
                <p className="text-white font-serif text-lg italic">
                  {photo.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors text-sm tracking-widest uppercase font-sans"
            onClick={() => setLightbox(null)}
          >
            Close ×
          </button>
          <div
            className="relative max-w-5xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.image_url}
              alt={lightbox.name}
              className="object-contain max-h-[78vh] w-auto max-w-full"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-serif text-xl italic mb-1">
                {lightbox.name}
              </p>
              <p className="text-white/50 text-xs tracking-widest uppercase font-sans">
                {lightbox.location ?? categoryLabel(lightbox.category)}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
