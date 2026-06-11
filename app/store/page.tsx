import Image from "@/components/Photo";
import Link from "next/link";
import { allPhotos } from "@/lib/photos";

export type PrintMeta = {
  id: string;
  photoIndex: number;
  title: string;
  location: string;
  category: string;
  description: string;
  prices: { size: string; price: number }[];
};

export const printsMeta: PrintMeta[] = [
  { id: "1", photoIndex: 10, title: "African Blue Tit", location: "Atlas Blidéen, Algeria", category: "Tits", description: "The North African race of the blue tit — darker-capped than its European cousin — pauses on a bare branch tip against a clear Algerian sky. A bright, restless jewel of the Atlas woodland.", prices: [{ size: "8×10\"", price: 180 }, { size: "11×14\"", price: 260 }, { size: "16×20\"", price: 380 }, { size: "20×30\"", price: 520 }] },
  { id: "2", photoIndex: 11, title: "Common Firecrest", location: "Atlas Cedar Forest, Algeria", category: "Kinglets", description: "One of the smallest birds in North Africa, barely six grams, with a blaze of orange across its crown. Photographed among the conifers of the Algerian Atlas after long, patient hours.", prices: [{ size: "8×10\"", price: 220 }, { size: "11×14\"", price: 310 }, { size: "16×20\"", price: 440 }, { size: "20×30\"", price: 600 }] },
  { id: "3", photoIndex: 12, title: "Great Cormorant", location: "Algerian Wetlands", category: "Waterbirds", description: "A great cormorant skims fast and low over still water, its reflection chasing beneath it. A powerful fisher of the lakes and coastlines of northern Algeria.", prices: [{ size: "8×10\"", price: 240 }, { size: "11×14\"", price: 340 }, { size: "16×20\"", price: 480 }, { size: "20×30\"", price: 660 }] },
  { id: "4", photoIndex: 13, title: "Graceful Prinia", location: "Algerian Reedbeds", category: "Warblers", description: "Long-tailed and slender, a graceful prinia clings to a bulrush stem against a clean blue sky. A tiny, energetic warbler of the reedbeds and marshes of Algeria.", prices: [{ size: "8×10\"", price: 195 }, { size: "11×14\"", price: 280 }, { size: "16×20\"", price: 395 }, { size: "20×30\"", price: 540 }] },
  { id: "5", photoIndex: 8, title: "Great Tit", location: "Atlas Blidéen, Algeria", category: "Tits", description: "A young great tit works through the dappled canopy of an Atlas oak. The most familiar of Algeria's woodland birds, given a careful portrait in soft forest light.", prices: [{ size: "8×10\"", price: 210 }, { size: "11×14\"", price: 300 }, { size: "16×20\"", price: 420 }, { size: "20×30\"", price: 580 }] },
  { id: "6", photoIndex: 17, title: "Yelkouan Shearwater", location: "Algerian Coast", category: "Seabirds", description: "Stiff-winged and low over the swell, a Yelkouan shearwater — a Mediterranean near-endemic — shears the sea off the Algerian coast at first light.", prices: [{ size: "8×10\"", price: 165 }, { size: "11×14\"", price: 245 }, { size: "16×20\"", price: 355 }, { size: "20×30\"", price: 490 }] },
];

export default function StorePage() {
  return (
    <>
      <section className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3 font-sans">Fine Art Prints</p>
        <h1 className="font-serif text-5xl md:text-6xl font-light italic mb-4">Print Shop</h1>
        <p className="text-muted max-w-xl leading-relaxed">
          Museum-quality giclée prints on Hahnemühle Photo Rag archival paper. Each print is hand-signed, numbered, and shipped with a certificate of authenticity.
        </p>
      </section>

      <section className="bg-surface border-y border-warm-gray">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[["Archival Quality", "Hahnemühle Photo Rag 308gsm"], ["Signed & Numbered", "Limited editions of 50"], ["Worldwide Shipping", "Carefully packed & insured"], ["Certificate Included", "With every purchase"]].map(([title, desc]) => (
            <div key={title}>
              <p className="text-xs tracking-widest uppercase text-charcoal mb-1 font-sans">{title}</p>
              <p className="text-xs text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {printsMeta.map((print) => {
            const photo = allPhotos[print.photoIndex];
            return (
              <Link key={print.id} href={`/store/${print.id}`} className="group block">
                <div className="bg-white p-4 md:p-5 mb-5 shadow-[0_8px_28px_rgba(26,26,24,0.10)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_16px_40px_rgba(26,26,24,0.16)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-warm-gray">
                    <Image src={photo.src} alt={print.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted mb-1 font-sans">{print.location}</p>
                    <h3 className="font-serif text-xl italic font-light group-hover:text-accent transition-colors">{print.title}</h3>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-muted/70 font-sans mt-1">Edition of 50 · Hand-signed</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-muted font-sans">from</p>
                    <p className="text-charcoal font-medium font-sans">${print.prices[0].price}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-charcoal text-cream py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans">Shipping &amp; Returns</p>
          <h2 className="font-serif text-3xl md:text-4xl italic font-light mb-6">Your Print, Safely Delivered</h2>
          <p className="text-cream/60 leading-relaxed mb-4">All prints are rolled in archival tissue, inserted in a rigid tube, and shipped via tracked courier to anywhere in the world. Handling time is 5–7 business days.</p>
          <p className="text-cream/60 leading-relaxed">If your print arrives damaged, contact me within 7 days of receipt and I will arrange a replacement at no cost to you.</p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex border border-cream/40 text-cream text-xs tracking-[0.3em] uppercase px-6 py-3 hover:bg-cream hover:text-charcoal transition-all duration-300">Questions? Contact Me</Link>
          </div>
        </div>
      </section>
    </>
  );
}
