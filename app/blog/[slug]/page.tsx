import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchAllUserPhotos, Photo500px } from "@/lib/500px";
import { posts } from "../page";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

const postContent: Record<string, string[]> = {
  "owls-of-the-maghreb": [
    "The Strix mauritanica — known as the Maghreb Owl or Algerian Tawny Owl — is one of North Africa's most charismatic endemic species. Long considered a subspecies of the Eurasian Tawny Owl, it was elevated to full species status in 2015, and it remains poorly documented in the photographic record.",
    "My obsession with this bird began some years ago when I heard one calling near my camp in the Atlas Blidéen late one autumn night. For months afterwards I returned to the same area, learning the territories of several pairs. Owls are creatures of habit — the same roost, the same calling post, the same hunting route, night after night.",
    "The key to photographing owls is arriving before they do. I set up my position well before dusk, using a hide that has been in place for several weeks so the birds have grown accustomed to it. I use natural light wherever possible — the warm low light of late afternoon before the birds emerge is my preferred window.",
    "The result has been a portfolio of intimate portraits that I believe represents some of the most detailed documentation of this species in natural conditions. Every encounter reminds me why patience is the most important skill in wildlife photography.",
    "The Athene noctua — the Little Owl — is a different kind of challenge: smaller, faster, and active earlier in the evening. It shares territory with the Maghreb Owl in many parts of Algeria, and the two species' territories often overlap at the forest edge.",
  ],
  "raptors-in-flight": [
    "Algeria lies at a crossroads of raptor migration routes. In spring and autumn, the skies above the northern Atlas fill with raptors moving between their European breeding grounds and their African wintering areas. Short-toed snake eagles, western marsh harriers, common kestrels and dozens of other species pass through in waves.",
    "The short-toed snake eagle is my favourite. A large, pale eagle with staring yellow eyes, it breeds in Algeria and is present through the summer. Its habit of hovering — searching for the reptiles that are its primary prey — makes it unusual among large eagles and gives extended photographic opportunities.",
    "The western marsh harrier is a different subject entirely. Low over the reedbeds, quartering back and forth in search of prey, it is all economy of motion — a perfect machine for hunting in wetland habitats. I have spent many early mornings watching harriers hunt the wetlands of the Algerian coast.",
    "Kestrels are everywhere. They are the raptor that most Algerians encounter daily, hovering above roadsides and urban edges with characteristic precision. They are also, to my eye, among the most beautiful — the male's rufous back and slate-grey head making it one of the most elegantly coloured birds of prey in the world.",
    "Documenting raptors in flight requires fast autofocus, long lenses, and — above all — anticipation. You cannot react to a raptor in flight; you have to predict where it will be half a second from now and pre-position the frame.",
  ],
  "coastal-birds-of-algeria": [
    "The Algerian coastline stretches for over 1,200 kilometres, and almost every section has its own bird community. Rocky headlands host yellow-legged gulls and cormorants; sandy beaches attract waders and terns; estuaries draw herons, egrets and spoonbills.",
    "I have been working along the western coastline in particular — around Ain Temouchent and the coastal lagoons to the east and west. These shallow lagoons, cut off from the sea by sand bars, are magnets for birds on migration. In peak season the number of species can be staggering.",
    "The ringed plover is one of my favourite coastal subjects. A small, neat wader with a bold black breast-band, it runs along the shoreline with quick, determined steps. Photographing it well requires lying flat on the sand — getting down to its eye level is the difference between a snapshot and a portrait.",
    "The yellow-legged gull is the dominant gull of the Algerian coast, and a bird that rewards careful study. The quality of light along the Mediterranean coast — particularly in late afternoon when the sea turns silver — can elevate even a commonplace bird into something extraordinary.",
    "The ruddy turnstone is a winter visitor: a small, chunky wader that turns over stones and seaweed on rocky shores in search of invertebrates. Its patterned winter plumage — tortoiseshell browns and orange — photographs beautifully against the dark wet rock.",
  ],
  "songbirds-of-the-atlas": [
    "The Atlas Blidéen — the forested mountains that rise steeply from the coastal plain south of Algiers — is one of the most bird-rich habitats in Algeria. Cedar, holm oak and Aleppo pine form a dense canopy that harbours a remarkable community of resident and migrant passerines.",
    "The great spotted woodpecker is a personal favourite. Its staccato drumming echoes through the forest in early spring when the males are establishing territory. Finding a drumming bird requires patience; approaching to a useful photographic distance requires extreme care.",
    "The golden oriole is a summer visitor, arriving from sub-Saharan Africa in April. The male is one of the most brilliantly coloured birds in the Algerian avifauna — vivid yellow and black, almost shocking in its intensity. It is, however, a shy bird that spends most of its time in the canopy.",
    "The European robin is present year-round, and it is a bird that rewards a slow approach. It is inquisitive by nature, and a patient photographer sitting quietly in the forest will often find that a robin has come to investigate at close range.",
    "The forest floor species — thrushes, warblers, flycatchers — are harder to photograph but endlessly rewarding. The spotted flycatcher, the melodious warbler, the Sardinian warbler: each has its own character, its own relationship to light and shadow, that only extended observation can reveal.",
  ],
  "little-owl-portrait": [
    "The Athene noctua — the Little Owl — is found throughout Algeria, from sea level to the high mountains. It is a small, compact owl with a rounded head, yellow eyes and a rather fierce expression that has made it, since antiquity, a symbol of wisdom.",
    "Photographing the Little Owl is in some ways simpler than photographing its nocturnal relatives, because it is partially diurnal — active at dawn and dusk, and sometimes visible during the day. It often perches on prominent posts or rocks, watching the world with those extraordinary eyes.",
    "The challenge is the light. The best portraits come from those golden minutes when the low sun turns the owl's brown-streaked plumage into something warm and luminous. This window is short — ten, fifteen minutes at most — and demands preparation.",
    "I found a pair that regularly perched on a particular drystone wall above a stream. Over several weeks I photographed them at different times of day, in different lights. The evening session — when the western sky turned amber and the owls came out to hunt — produced the images I am most proud of.",
    "The Little Owl is not a threatened species in Algeria, but it is sensitive to habitat change — intensive agriculture, the loss of old trees with natural cavities, the use of rodenticides. These portraits are also documents: of a bird, a habitat, and a moment in time.",
  ],
  "kingfisher-on-the-stream": [
    "The common kingfisher is one of those birds that inspires an almost universal reaction: a flash of electric blue above the water, and people stop walking. Even those who never look at birds look at kingfishers.",
    "Photographing them well is another matter. The kingfisher perches at the water's edge, watching the surface below with intense concentration. When it dives, it enters the water with barely a ripple and reappears in a fraction of a second.",
    "But the perched portrait is equally compelling. The bird's electric blue back, orange-red breast, and dagger bill are among the most striking colour combinations in nature. Getting to the right distance, in the right light, without disturbing the bird requires time and care.",
    "I found a stretch of stream in the Atlas foothills where a pair of kingfishers were nesting in the bank. Over several mornings I set up at the same point, using a low hide at water level. The light came at an angle that illuminated the bird's back while leaving the water behind it dark.",
    "The resulting images are among my simplest and most satisfying: one bird, one perch, one light, one moment. Photography at its most direct.",
  ],
};

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const photos = await fetchAllUserPhotos(3);
  const coverPhoto = photos.find((p) => p.id === post.photoId);
  const content = postContent[slug] ?? ["Field notes coming soon."];
  const related = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[400px] overflow-hidden bg-charcoal">
        {coverPhoto && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={coverPhoto.image_url} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-center px-6">
          <span className="bg-accent text-cream text-xs tracking-widest uppercase px-3 py-1 font-sans mb-5">{post.category}</span>
          <h1 className="font-serif text-4xl md:text-6xl text-white font-light italic max-w-3xl leading-tight">{post.title}</h1>
          <p className="text-white/60 text-xs tracking-widest uppercase mt-4 font-sans">{post.date}</p>
        </div>
      </section>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <p className="font-serif text-xl md:text-2xl italic font-light text-charcoal leading-relaxed mb-10 border-l-2 border-accent pl-6">
          {post.excerpt}
        </p>
        <div className="space-y-6 text-muted leading-relaxed">
          {content.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="mt-12 pt-12 border-t border-warm-gray flex items-center justify-between">
          <Link href="/blog" className="text-xs tracking-widest uppercase text-muted hover:text-charcoal transition-colors border-b border-current pb-1">← Back to Journal</Link>
          <p className="text-xs text-muted font-sans">{post.date}</p>
        </div>
      </article>

      {/* Related */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3 font-sans">Continue Reading</p>
          <h2 className="font-serif text-3xl italic font-light mb-10">More from the Journal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((rp) => {
              const rPhoto = photos.find((p) => p.id === rp.photoId);
              return (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                  <div className="relative aspect-[16/9] overflow-hidden mb-4 bg-warm-gray">
                    {rPhoto && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={rPhoto.image_url} alt={rp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    )}
                  </div>
                  <p className="text-xs tracking-widest uppercase text-muted mb-2 font-sans">{rp.date}</p>
                  <h3 className="font-serif text-xl italic font-light group-hover:text-accent transition-colors">{rp.title}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
