import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchAllUserPhotos } from "@/lib/500px";
import { printsMeta } from "../page";
import PrintDetailForm from "./_components/PrintDetailForm";

type Params = Promise<{ id: string }>;

export default async function PrintDetailPage({ params }: { params: Params }) {
  const { id } = await params;
  const print = printsMeta.find((p) => p.id === id);
  if (!print) return notFound();

  const photos = await fetchAllUserPhotos(3);
  const photo = photos.find((p) => p.id === print.photoId);

  const related = printsMeta.filter((p) => p.id !== id).slice(0, 3);
  const relatedWithPhotos = related.map((rp) => ({
    ...rp,
    imageUrl: photos.find((p) => p.id === rp.photoId)?.image_url ?? null,
  }));

  return (
    <>
      <section className="pt-24 md:pt-28 max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="relative aspect-[4/3] overflow-hidden bg-warm-gray">
            {photo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photo.image_url} alt={print.title} className="w-full h-full object-cover" />
            )}
          </div>
          <PrintDetailForm print={print} imageUrl={photo?.image_url ?? null} />
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3 font-sans">More Prints</p>
          <h2 className="font-serif text-3xl italic font-light mb-10">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedWithPhotos.map((rp) => (
              <Link key={rp.id} href={`/store/${rp.id}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-warm-gray">
                  {rp.imageUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={rp.imageUrl} alt={rp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  )}
                </div>
                <p className="text-xs tracking-widest uppercase text-muted mb-1 font-sans">{rp.location}</p>
                <div className="flex justify-between items-center">
                  <p className="font-serif italic text-lg group-hover:text-accent transition-colors">{rp.title}</p>
                  <p className="text-sm text-muted font-sans">from ${rp.prices[0].price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
