import Link from "next/link";
import { fetchAllUserPhotos, Photo500px } from "@/lib/500px";

// IDs chosen for featured sections (from your 500px portfolio)
const FEATURED_IDS = [1101819758, 1111705039, 1101443572];
const HERO_ID = 1105970784;
const ABOUT_IMG_ID = 1091066214;
const BLOG_IMG_IDS = [1112023461, 1091066214, 1101819758];
const STORE_IDS = [1101819758, 1111705039, 1101443572];

function findPhoto(photos: Photo500px[], id: number): Photo500px | undefined {
  return photos.find((p) => p.id === id);
}

const storeMeta = [
  { id: 1101819758, title: "Large Seagull", price: 180 },
  { id: 1111705039, title: "Athene noctua", price: 220 },
  { id: 1101443572, title: "Western Marsh Harrier", price: 195 },
];

const blogPosts = [
  { slug: "owls-of-the-maghreb", title: "Owls of the Maghreb", date: "May 12, 2026", excerpt: "The Strix mauritanica — endemic to North Africa — photographed deep in the Atlas cedar forests after weeks of patient observation.", photoId: 1112023461 },
  { slug: "raptors-in-flight", title: "Raptors Above the Atlas", date: "April 3, 2026", excerpt: "Short-toed snake eagles, western marsh harriers and common kestrels ride the thermals above the Algerian highlands all summer long.", photoId: 1091066214 },
  { slug: "coastal-birds-of-algeria", title: "The Coastal Birds of Algeria", date: "February 18, 2026", excerpt: "From waders on the tide line to gulls riding the sea breeze — the Algerian coastline is alive with birds year-round.", photoId: 1101819758 },
];

export default async function HomePage() {
  const photos = await fetchAllUserPhotos(3);
  const hero = findPhoto(photos, HERO_ID);
  const featured = FEATURED_IDS.map((id) => findPhoto(photos, id)).filter(Boolean) as Photo500px[];

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {hero ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={hero.image_url}
            alt={hero.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-charcoal" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/70 text-xs tracking-[0.4em] uppercase mb-6 font-sans">
            Wildlife &amp; Bird Photography
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-none mb-6 italic">
            Through Algerian Eyes
          </h1>
          <p className="text-white/80 text-sm md:text-base tracking-widest uppercase mb-10 font-sans">
            Abdelmalek Ouksili
          </p>
          <Link
            href="/portfolio"
            className="border border-white/80 text-white text-xs tracking-[0.3em] uppercase px-8 py-3.5 hover:bg-white hover:text-charcoal transition-all duration-300"
          >
            View Portfolio
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs tracking-widest uppercase font-sans">Scroll</span>
          <div className="w-px h-10 bg-white/30" />
        </div>
      </section>

      {/* Selected Work */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2 font-sans">Selected Work</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light italic">Recent Images</h2>
          </div>
          <Link href="/portfolio" className="hidden md:inline-flex text-xs tracking-widest uppercase text-muted hover:text-charcoal transition-colors border-b border-current pb-1">
            View All
          </Link>
        </div>

        {featured.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 md:h-[580px]">
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden">
              <div className="relative aspect-[4/3] md:h-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured[0].image_url}
                  alt={featured[0].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white/70 text-xs tracking-widest uppercase mb-1 font-sans">{featured[0].location ?? "Algeria"}</p>
                  <p className="text-white font-serif text-xl italic">{featured[0].name}</p>
                </div>
              </div>
            </div>
            {featured.slice(1, 3).map((photo) => (
              <div key={photo.id} className="group relative overflow-hidden aspect-[4/3] md:aspect-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.image_url}
                  alt={photo.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white/70 text-xs tracking-widest uppercase mb-1 font-sans">{photo.location ?? "Algeria"}</p>
                  <p className="text-white font-serif text-lg italic">{photo.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* About Teaser */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {(() => {
            const img = findPhoto(photos, ABOUT_IMG_ID);
            return img ? (
              <div className="relative aspect-[4/5] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.image_url} alt={img.name} className="w-full h-full object-cover" />
              </div>
            ) : null;
          })()}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans">About</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light italic leading-tight mb-6">
              Birds &amp; Wildlife of the Maghreb
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              I am an Algerian wildlife photographer specialising in the birds and fauna of North Africa — from the forests and mountains of the Atlas to the wetlands and coastline of the Algerian sea.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Algeria is home to an extraordinary range of species, many endemic to the Maghreb and rarely photographed. My work aims to document this richness and share it with the world.
            </p>
            <Link href="/about" className="inline-flex text-xs tracking-[0.3em] uppercase text-charcoal hover:text-accent transition-colors border-b border-current pb-1">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Journal */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2 font-sans">Journal</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light italic">Field Notes</h2>
          </div>
          <Link href="/blog" className="hidden md:inline-flex text-xs tracking-widest uppercase text-muted hover:text-charcoal transition-colors border-b border-current pb-1">
            All Posts
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const photo = findPhoto(photos, post.photoId);
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden mb-5 bg-warm-gray">
                  {photo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={photo.image_url} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  )}
                </div>
                <p className="text-xs tracking-widest uppercase text-muted mb-2 font-sans">{post.date}</p>
                <h3 className="font-serif text-xl md:text-2xl italic font-light mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Print Store Teaser */}
      <section className="bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3 font-sans">Fine Art Prints</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light italic mb-4">Bring the Wild Home</h2>
            <p className="text-cream/60 text-sm max-w-xl mx-auto leading-relaxed">
              Museum-quality prints on archival paper. Each print is individually signed and shipped with a certificate of authenticity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {storeMeta.map((item) => {
              const photo = findPhoto(photos, item.id);
              return (
                <Link key={item.id} href={`/store/${item.id}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-charcoal/50">
                    {photo && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={photo.image_url} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-serif italic text-lg group-hover:text-accent transition-colors">{item.title}</p>
                    <p className="text-sm text-cream/60 font-sans">From ${item.price}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center">
            <Link href="/store" className="inline-flex border border-cream/40 text-cream text-xs tracking-[0.3em] uppercase px-8 py-3.5 hover:bg-cream hover:text-charcoal transition-all duration-300">
              Shop All Prints
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
