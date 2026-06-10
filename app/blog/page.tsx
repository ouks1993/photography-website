import Link from "next/link";
import { fetchAllUserPhotos, Photo500px } from "@/lib/500px";

function find(photos: Photo500px[], id: number) {
  return photos.find((p) => p.id === id);
}

export const posts = [
  { slug: "owls-of-the-maghreb", title: "Owls of the Maghreb", date: "May 12, 2026", category: "Raptors & Owls", excerpt: "The Strix mauritanica — the Maghreb Owl — is found only in North Africa. Patient nights in the Atlas forests yielded some of my closest encounters with this elusive species.", photoId: 1112023461, featured: true },
  { slug: "raptors-in-flight", title: "Raptors Above the Atlas", date: "April 3, 2026", category: "Raptors & Owls", excerpt: "Short-toed snake eagles, western marsh harriers and common kestrels ride the thermals above the Algerian highlands. Three months in the field, chasing the sky.", photoId: 1091066214, featured: false },
  { slug: "coastal-birds-of-algeria", title: "The Coastal Birds of Algeria", date: "February 18, 2026", category: "Waterbirds", excerpt: "From the ringed plover picking along the tide line to gulls riding the sea breeze — the Algerian coastline is alive with birds across every season.", photoId: 1101819758, featured: false },
  { slug: "songbirds-of-the-atlas", title: "Songbirds of the Atlas Forest", date: "January 7, 2026", category: "Songbirds", excerpt: "The Atlas Blidéen harbours a remarkable diversity of passerines: robins, orioles, warblers and woodpeckers, in a forest that feels untouched by time.", photoId: 1105984697, featured: false },
  { slug: "little-owl-portrait", title: "Portrait of a Little Owl", date: "November 22, 2025", category: "Raptors & Owls", excerpt: "The Athene noctua — Little Owl — watches the world with wide amber eyes. Photographing it in the last light of the afternoon is one of my favourite recurring experiences.", photoId: 1111705039, featured: false },
  { slug: "kingfisher-on-the-stream", title: "Kingfisher on the Stream", date: "October 5, 2025", category: "Waterbirds", excerpt: "Finding a kingfisher's perch takes patience. Waiting for the right light takes longer. Getting both at once is a small miracle — one I keep chasing.", photoId: 1100151350, featured: false },
];

export default async function BlogPage() {
  const photos = await fetchAllUserPhotos(3);
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);
  const featuredPhoto = find(photos, featured.photoId);

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
            {featuredPhoto && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={featuredPhoto.image_url} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            )}
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
            const photo = find(photos, post.photoId);
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-5 bg-warm-gray">
                  {photo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={photo.image_url} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  )}
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
