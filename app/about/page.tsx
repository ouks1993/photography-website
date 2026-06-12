import type { Metadata } from "next";
import Image from "@/components/Photo";
import Link from "next/link";
import { allPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "About",
  description:
    "Abdelmalek Ouksili is an Algerian wildlife photographer documenting the birds of the Maghreb — from Atlas endemics like the Maghreb Owl to the migrants of the Mediterranean coast.",
};

const hero = allPhotos[16];
const portrait = {
  src: "/images/abdelmalek-portrait.jpg",
  alt: "Abdelmalek Ouksili in the field with his camera, Atlas foothills, Algeria",
};
const strip = [allPhotos[1], allPhotos[3], allPhotos[21], allPhotos[14]];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image src={hero.src} alt={hero.alt} fill className="object-cover" preload sizes="100vw" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-end px-6 md:px-12 pb-16 max-w-7xl mx-auto">
          <div>
            <p className="text-white/60 text-xs tracking-[0.4em] uppercase mb-3 font-sans">About</p>
            <h1 className="font-serif text-5xl md:text-6xl text-white font-light italic">Abdelmalek Ouksili</h1>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7">
            <p className="font-serif text-2xl md:text-3xl italic font-light leading-relaxed text-charcoal mb-8">
              "Algeria is home to an extraordinary range of wildlife — much of it rarely photographed, even less well-known. My work is a small attempt to change that."
            </p>
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                I am an Algerian nature photographer based in Algeria, with a passion for birds and wildlife of the Maghreb. In two intense years behind the camera I have documented species ranging from Maghreb endemics — such as the Strix mauritanica and Barbary partridge — to migratory birds passing through on their journeys between Europe and sub-Saharan Africa.
              </p>
              <p>
                My main habitats are the forests and mountain streams of the Atlas Blidéen, the wetlands and coastal cliffs of western Algeria, and the scrublands where raptors hunt at dusk. I spend most of my field time within a few hundred kilometres of Algiers, proving that world-class wildlife photography does not require travelling to the ends of the earth.
              </p>
              <p>
                I also photograph in France and along the Mediterranean coast, where North African and European avifaunas overlap and where birds can be observed in very different habitats.
              </p>
              <p>
                Beyond photography I am active in the Algerian birding community, recording sightings and contributing to citizen science databases. I believe that photography and conservation belong together — every image is also a record, and a record is the first step towards protection.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex border border-charcoal text-charcoal text-xs tracking-[0.3em] uppercase px-6 py-3 hover:bg-charcoal hover:text-cream transition-all duration-300">
                Get in Touch
              </Link>
              <Link href="/portfolio" className="inline-flex border border-warm-gray text-muted text-xs tracking-[0.3em] uppercase px-6 py-3 hover:border-charcoal hover:text-charcoal transition-all duration-300">
                View Portfolio
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden mb-3">
              <Image src={portrait.src} alt={portrait.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
            </div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted font-sans mb-6">
              In the field — Atlas foothills, Algeria
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[["Based", "Algeria"], ["Speciality", "Birds & Wildlife"], ["Focus Region", "Maghreb & Mediterranean"], ["500px", "El Ouks"]].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs tracking-widest uppercase text-muted mb-1 font-sans">{label}</p>
                  <p className="text-charcoal">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Field stats */}
      <section className="border-y border-warm-gray">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 grid grid-cols-3 gap-6 text-center">
          {[
            ["100+", "Species documented"],
            ["2", "Years in the field"],
            ["1,200 km", "Of Algerian coastline"],
          ].map(([num, label]) => (
            <div key={label}>
              <p className="font-serif italic font-light text-4xl md:text-6xl text-charcoal mb-2">{num}</p>
              <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted font-sans">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery strip */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {strip.map((photo) => (
            <div key={photo.src} className="relative aspect-square overflow-hidden group">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-serif italic">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}
