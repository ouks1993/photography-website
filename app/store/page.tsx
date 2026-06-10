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
  { id: "1", photoIndex: 10, title: "Large Seagull", location: "Algerian Coast", category: "Waterbirds", description: "A large seagull rides the coastal wind above the Algerian sea. The most viewed image in my portfolio — captured in a single, unguarded moment of flight.", prices: [{ size: "8×10\"", price: 180 }, { size: "11×14\"", price: 260 }, { size: "16×20\"", price: 380 }, { size: "20×30\"", price: 520 }] },
  { id: "2", photoIndex: 11, title: "Athene noctua", location: "Algeria", category: "Raptors & Owls", description: "The Little Owl watches the world with wide amber eyes in the last light of an Algerian afternoon. An intimate owl portrait made after weeks of patient observation.", prices: [{ size: "8×10\"", price: 220 }, { size: "11×14\"", price: 310 }, { size: "16×20\"", price: 440 }, { size: "20×30\"", price: 600 }] },
  { id: "3", photoIndex: 12, title: "Strix mauritanica", location: "Atlas Blidéen, Algeria", category: "Raptors & Owls", description: "The Maghreb Owl — endemic to North Africa — photographed deep in the Atlas cedar forest. A rarely documented species in such intimate natural conditions.", prices: [{ size: "8×10\"", price: 240 }, { size: "11×14\"", price: 340 }, { size: "16×20\"", price: 480 }, { size: "20×30\"", price: 660 }] },
  { id: "4", photoIndex: 13, title: "Western Marsh Harrier", location: "Algerian Wetlands", category: "Raptors & Owls", description: "A western marsh harrier banks over the reedbeds in the golden light of early morning. One of several hundred frames from a single morning session.", prices: [{ size: "8×10\"", price: 195 }, { size: "11×14\"", price: 280 }, { size: "16×20\"", price: 395 }, { size: "20×30\"", price: 540 }] },
  { id: "5", photoIndex: 8, title: "Short-toed Snake Eagle", location: "Algeria", category: "Raptors & Owls", description: "A short-toed snake eagle hovers above the Algerian scrubland, its pale underside lit by the afternoon sun. A summer visitor to northern Algeria.", prices: [{ size: "8×10\"", price: 210 }, { size: "11×14\"", price: 300 }, { size: "16×20\"", price: 420 }, { size: "20×30\"", price: 580 }] },
  { id: "6", photoIndex: 17, title: "European Robin", location: "Algeria", category: "Songbirds", description: "A European robin in close portrait — its orange-red breast glowing in the soft, diffused light of an Atlas forest morning. One of my most-requested images.", prices: [{ size: "8×10\"", price: 165 }, { size: "11×14\"", price: 245 }, { size: "16×20\"", price: 355 }, { size: "20×30\"", price: 490 }] },
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
                <div className="relative aspect-[4/3] overflow-hidden mb-5 bg-warm-gray">
                  <Image src={photo.src} alt={print.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted mb-1 font-sans">{print.location}</p>
                    <h3 className="font-serif text-xl italic font-light group-hover:text-accent transition-colors">{print.title}</h3>
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
