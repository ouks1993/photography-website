import type { Metadata } from "next";
import { allPhotos } from "@/lib/photos";
import PhotoGallery from "./_components/PhotoGallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Wildlife photographs from Algeria — flamingos of the sebkha, owls of the Atlas cedar forest, seabirds of the Mediterranean coast and more.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3 font-sans">
          Work
        </p>
        <h1 className="font-serif text-5xl md:text-6xl font-light italic mb-10">
          Portfolio
        </h1>
      </section>

      <PhotoGallery photos={allPhotos} />
    </>
  );
}
