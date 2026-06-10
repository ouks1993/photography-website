import { fetchAllUserPhotos } from "@/lib/500px";
import PhotoGallery from "./_components/PhotoGallery";

export default async function PortfolioPage() {
  const photos = await fetchAllUserPhotos(3); // fetch 3 pages = 60 photos

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

      <PhotoGallery photos={photos} />
    </>
  );
}
