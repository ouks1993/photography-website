import Image from "@/components/Photo";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { allPhotos } from "@/lib/photos";

const hero = allPhotos[0];
const featured = [allPhotos[1], allPhotos[2], allPhotos[3]];
const aboutImg = allPhotos[29]; // Maghreb Owl — the North African endemic
const interlude = allPhotos[6];

const blogPosts = [
  { slug: "melodious-warbler-in-song", title: "The Melodious Warbler in Full Song", date: "May 12, 2026", excerpt: "Bill thrown wide, a melodious warbler pours out its song from a young Atlas cedar — one of the defining voices of the Algerian spring.", photo: allPhotos[7] },
  { slug: "sardinian-warbler-in-the-scrub", title: "Sardinian Warbler in the Scrub", date: "April 3, 2026", excerpt: "Black hood and a fire-red eye-ring: the male Sardinian warbler is one of the most characteristic birds of the Algerian maquis.", photo: allPhotos[18] },
  { slug: "yelkouan-shearwater-at-sea", title: "Yelkouan Shearwater Over the Sea", date: "February 18, 2026", excerpt: "Stiff-winged and low over the swell, a Yelkouan shearwater — a true Mediterranean seabird — photographed from a small boat off the coast.", photo: allPhotos[17] },
];

const storeMeta = [
  { id: "1", title: "African Blue Tit", price: 180, photo: allPhotos[10] },
  { id: "2", title: "Common Firecrest", price: 220, photo: allPhotos[11] },
  { id: "3", title: "Great Cormorant", price: 240, photo: allPhotos[12] },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <Image src={hero.src} alt={hero.alt} fill className="object-cover kenburns" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/70 text-xs tracking-[0.4em] uppercase mb-6 font-sans">Wildlife &amp; Bird Photography</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-none mb-6 italic">Through Algerian Eyes</h1>
          <p className="text-white/80 text-sm md:text-base tracking-widest uppercase mb-10 font-sans">Abdelmalek Ouksili</p>
          <Link href="/portfolio" className="border border-white/80 text-white text-xs tracking-[0.3em] uppercase px-8 py-3.5 hover:bg-white hover:text-charcoal transition-all duration-300">
            View Portfolio
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs tracking-widest uppercase font-sans">Scroll</span>
          <div className="w-px h-10 bg-white/30" />
        </div>
        <p className="absolute bottom-8 right-6 md:right-12 text-white/40 text-[10px] tracking-[0.25em] uppercase font-sans hidden md:block">
          {hero.title} · {hero.location}
        </p>
      </section>

      {/* Selected Work */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2 font-sans">Selected Work</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light italic">Recent Images</h2>
            </div>
            <Link href="/portfolio" className="hidden md:inline-flex text-xs tracking-widest uppercase text-muted hover:text-charcoal transition-colors border-b border-current pb-1">View All</Link>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 md:h-[580px]">
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden">
              <div className="relative aspect-[4/3] md:h-full overflow-hidden">
                <Image src={featured[0].src} alt={featured[0].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 66vw" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-serif text-xl italic">{featured[0].title}</p>
                  <p className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-sans mt-1">{featured[0].location}</p>
                </div>
              </div>
            </div>
            {featured.slice(1).map((photo) => (
              <div key={photo.src} className="group relative overflow-hidden aspect-[4/3] md:aspect-auto">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-serif text-lg italic">{photo.title}</p>
                  <p className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-sans mt-1">{photo.location}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* About Teaser */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={aboutImg.src} alt={aboutImg.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <p className="absolute bottom-3 right-4 text-white/60 text-[10px] tracking-[0.2em] uppercase font-sans">
                {aboutImg.title} · <em className="normal-case font-serif">{aboutImg.latin}</em>
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans">About</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light italic leading-tight mb-6">Birds &amp; Wildlife of the Maghreb</h2>
              <p className="text-muted leading-relaxed mb-4">I am an Algerian wildlife photographer specialising in the birds and fauna of North Africa — from the forests and mountains of the Atlas to the wetlands and coastline of the Algerian sea.</p>
              <p className="text-muted leading-relaxed mb-8">Algeria is home to an extraordinary range of species, many endemic to the Maghreb and rarely photographed — like the Maghreb Owl pictured here, found nowhere outside North Africa. My work aims to document this richness and share it with the world.</p>
              <Link href="/about" className="inline-flex text-xs tracking-[0.3em] uppercase text-charcoal hover:text-accent transition-colors border-b border-current pb-1">Read More</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Full-bleed interlude */}
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <Image src={interlude.src} alt={interlude.alt} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <Reveal>
            <p className="font-serif italic text-2xl md:text-4xl text-white font-light max-w-3xl leading-snug">
              "Most of these photographs were made within two hundred kilometres of Algiers."
            </p>
          </Reveal>
        </div>
      </section>

      {/* Latest Journal */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2 font-sans">Journal</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light italic">Field Notes</h2>
            </div>
            <Link href="/blog" className="hidden md:inline-flex text-xs tracking-widest uppercase text-muted hover:text-charcoal transition-colors border-b border-current pb-1">All Posts</Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden mb-5 bg-warm-gray">
                  <Image src={post.photo.src} alt={post.title} fill className={`object-cover transition-transform duration-700 group-hover:scale-105 ${post.photo.pos ?? ""}`} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <p className="text-xs tracking-widest uppercase text-muted mb-2 font-sans">{post.date}</p>
                <h3 className="font-serif text-xl md:text-2xl italic font-light mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Print Store Teaser */}
      <section className="bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3 font-sans">Fine Art Prints</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light italic mb-4">Bring the Wild Home</h2>
              <p className="text-cream/60 text-sm max-w-xl mx-auto leading-relaxed">Museum-quality prints on archival paper. Each print is individually signed and shipped with a certificate of authenticity.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {storeMeta.map((item, i) => (
              <Reveal key={item.id} delay={i * 100}>
                <Link href={`/store/${item.id}`} className="group block">
                  <div className="bg-cream p-3 mb-4 shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={item.photo.src} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-serif italic text-lg group-hover:text-accent transition-colors">{item.title}</p>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-cream/40 font-sans mt-0.5">Edition of 50</p>
                    </div>
                    <p className="text-sm text-cream/60 font-sans">From ${item.price}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="text-center">
            <Link href="/store" className="inline-flex border border-cream/40 text-cream text-xs tracking-[0.3em] uppercase px-8 py-3.5 hover:bg-cream hover:text-charcoal transition-all duration-300">Shop All Prints</Link>
          </div>
        </div>
      </section>
    </>
  );
}
