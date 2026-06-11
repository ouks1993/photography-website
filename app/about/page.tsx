import Image from "@/components/Photo";
import Link from "next/link";
import { allPhotos } from "@/lib/photos";

const hero = allPhotos[16];
const portrait = allPhotos[26];
const strip = [allPhotos[1], allPhotos[3], allPhotos[21], allPhotos[14]];

const awards = [
  { year: "2025", title: "500px Community Award", body: "Top contributor — Wildlife category, North Africa" },
  { year: "2024", title: "Birds of the Maghreb Exhibition", body: "Featured photographer — Algiers Natural History Museum" },
  { year: "2023", title: "Algerian Birding Society", body: "Photo of the Year — Strix mauritanica portrait" },
  { year: "2022", title: "Mediterranean Wildlife Photography Award", body: "Coastal Birds Category — Finalist" },
];

const gear = [
  { category: "Bodies", items: ["Canon EOS R5", "Canon EOS 7D Mark II (backup)"] },
  { category: "Lenses", items: ["Canon RF 600mm f/4 L IS USM", "Canon EF 100-400mm f/4.5-5.6L IS II", "Canon EF 500mm f/4 L IS II USM"] },
  { category: "Support", items: ["Gitzo GT5562LTS Tripod", "Wimberley WH-200 Gimbal Head", "Manfrotto 190 for macro"] },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image src={hero.src} alt={hero.alt} fill className="object-cover" priority sizes="100vw" />
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
                I am an Algerian nature photographer based in Algeria, with a passion for birds and wildlife of the Maghreb. Over more than a decade behind the camera I have documented species ranging from Maghreb endemics — such as the Strix mauritanica and Barbary partridge — to migratory birds passing through on their journeys between Europe and sub-Saharan Africa.
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
            <div className="relative aspect-[3/4] overflow-hidden mb-6">
              <Image src={portrait.src} alt={portrait.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
            </div>
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
            ["10+", "Years in the field"],
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
        <div className="grid grid-cols-4 gap-2">
          {strip.map((photo) => (
            <div key={photo.src} className="relative aspect-square overflow-hidden group">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="25vw" />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                <p className="text-white text-xs font-serif italic">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3 font-sans">Recognition</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light italic mb-12">Awards &amp; Recognition</h2>
          <div className="divide-y divide-warm-gray">
            {awards.map((a, i) => (
              <div key={i} className="py-6 grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 items-start">
                <p className="text-muted text-sm font-sans">{a.year}</p>
                <div>
                  <p className="text-charcoal font-medium mb-1">{a.title}</p>
                  <p className="text-muted text-sm">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gear */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3 font-sans">Tools</p>
        <h2 className="font-serif text-4xl md:text-5xl font-light italic mb-12">Camera Gear</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {gear.map((group) => (
            <div key={group.category}>
              <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4 font-sans border-b border-warm-gray pb-3">{group.category}</p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-charcoal text-sm leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
