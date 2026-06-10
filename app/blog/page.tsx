import Image from "@/components/Photo";
import Link from "next/link";
import { allPhotos } from "@/lib/photos";

export const posts = [
  { slug: "melodious-warbler-in-song", title: "The Melodious Warbler in Full Song", date: "May 12, 2026", category: "Warblers", excerpt: "Bill wide open, a melodious warbler pours out its song from a young Atlas cedar. A summer visitor that fills the Algerian woodlands with sound from April onward.", photoIndex: 7, featured: true },
  { slug: "sardinian-warbler-in-the-scrub", title: "Sardinian Warbler in the Scrub", date: "April 3, 2026", category: "Warblers", excerpt: "Black hood, fire-red eye-ring — a male Sardinian warbler peers down from an olive twig. One of the most characteristic birds of the Algerian maquis.", photoIndex: 18, featured: false },
  { slug: "yelkouan-shearwater-at-sea", title: "Yelkouan Shearwater Over the Sea", date: "February 18, 2026", category: "Seabirds", excerpt: "Stiff-winged and low, a Yelkouan shearwater shears the swell off the Algerian coast. A true Mediterranean seabird, photographed from a small boat at first light.", photoIndex: 17, featured: false },
  { slug: "firecrest-the-smallest-jewel", title: "Firecrest, the Smallest Jewel", date: "January 7, 2026", category: "Kinglets", excerpt: "One of North Africa's tiniest birds, a common firecrest carries a feather to its nest. Barely nine grams of fire-crowned energy among the Atlas conifers.", photoIndex: 11, featured: false },
  { slug: "black-redstart-on-bare-ground", title: "Black Redstart on Bare Ground", date: "November 22, 2025", category: "Chats", excerpt: "Sooty grey with a burning rust-red tail, a black redstart pauses on broken earth. A hardy bird equally at home on mountain crags and Algerian rooftops.", photoIndex: 9, featured: false },
  { slug: "great-tit-of-the-atlas", title: "A Great Tit in the Atlas Woods", date: "October 5, 2025", category: "Tits", excerpt: "A young great tit works through the canopy of an Atlas oak. Familiar across Algeria, yet always worth the patience for a clean frame in dappled forest light.", photoIndex: 8, featured: false },
];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);
  const featuredPhoto = allPhotos[featured.photoIndex];

  return (
    <>
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3 font-sans">Writing</p>
        <h1 className="font-serif text-5xl md:text-6xl font-light italic">Journal</h1>
      </section>

      {/* Featured post */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <Link href={`/blog/${featured.slug}`} className="group block">
          <div className="relative aspect-[21/9] overflow-hidden mb-6 bg-warm-gray">
            <Image src={featuredPhoto.src} alt={featured.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority sizes="100vw" />
            <div className="absolute top-4 left-4">
              <span className="bg-accent text-cream text-xs tracking-widest uppercase px-3 py-1 font-sans">{featured.category}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <p className="text-xs tracking-widest uppercase text-muted mb-3 font-sans">{featured.date}</p>
              <h2 className="font-serif text-3xl md:text-4xl italic font-light group-hover:text-accent transition-colors">{featured.title}</h2>
            </div>
            <div className="md:pt-8">
              <p className="text-muted leading-relaxed mb-4">{featured.excerpt}</p>
              <span className="text-xs tracking-widest uppercase text-charcoal hover:text-accent transition-colors border-b border-current pb-1">Read More</span>
            </div>
          </div>
        </Link>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="border-t border-warm-gray" />
      </div>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rest.map((post) => {
            const photo = allPhotos[post.photoIndex];
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-5 bg-warm-gray">
                  <Image src={photo.src} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-charcoal text-xs tracking-widest uppercase px-2.5 py-1 font-sans">{post.category}</span>
                  </div>
                </div>
                <p className="text-xs tracking-widest uppercase text-muted mb-2 font-sans">{post.date}</p>
                <h3 className="font-serif text-xl md:text-2xl italic font-light mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="text-sm text-muted leading-relaxed line-clamp-3">{post.excerpt}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
