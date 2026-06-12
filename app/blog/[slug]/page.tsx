import type { Metadata } from "next";
import Image from "@/components/Photo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPhotos } from "@/lib/photos";
import { posts } from "../page";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [allPhotos[post.photoIndex].src] },
  };
}

const postContent: Record<string, string[]> = {
  "melodious-warbler-in-song": [
    "There are mornings in late spring when the Algerian woodland seems to be made entirely of sound. Chief among the singers is the melodious warbler (Hippolais polyglotta) — a small, lemon-yellow bird with a long, hurried, chattering song that it delivers with its whole body, bill thrown wide open as in this frame.",
    "The melodious warbler is a summer visitor to Algeria, arriving from its sub-Saharan wintering grounds in April and staying to breed through the early summer. It favours open woodland, scrub and the edges of cultivation, and in the Atlas it is especially fond of young cedar and pine, where it sings from an exposed perch near the top of a sapling.",
    "Photographing a singing bird is a particular pleasure, because for once the subject stays put. A male in full song will return to the same favourite perches again and again, which lets me set up quietly at a respectful distance and wait. The challenge here was the tangle of cedar needles — finding the one angle where the bird sat clear of clutter, framed by soft green.",
    "I made this image in the Atlas Blidéen, south of Algiers, on a still morning in May. The light was diffused by high cloud, which suited the warbler's subtle yellows and kept the harsh contrast of midday off the scene.",
    "The melodious warbler is not rare, but it is easy to overlook — a small yellow bird in a green tree. To me it is one of the defining voices of the Algerian spring, and a reminder that the most ordinary species often make the most rewarding portraits.",
  ],
  "sardinian-warbler-in-the-scrub": [
    "Few birds embody the Algerian maquis as completely as the Sardinian warbler (Curruca melanocephala). The male is unmistakable: a glossy black hood, clean white throat, grey body and — the detail that stops you — a brilliant red ring of bare skin around the eye, like a drop of fire set in the face.",
    "Unlike the migrant warblers, the Sardinian warbler is a resident in Algeria, present all year in the low scrub, olive groves, garrigue and garden edges of the north. It is a restless, skulking bird, forever diving into the densest cover with a scolding, rattling call — which makes a clean, open view like this one hard-won.",
    "This male perched for only a few seconds on an exposed olive twig, looking down at me with that fierce red eye. I was lying low with the sun behind me, and the out-of-focus yellow at the bottom of the frame is a field of spring flowers catching the light below the bush.",
    "The picture was taken in coastal scrub in northern Algeria, in early spring, when the males are at their most territorial and most willing to show themselves in the open to sing and display.",
    "The Sardinian warbler is common, even abundant, across the Algerian littoral — but its combination of sharp black-and-grey plumage and that red eye-ring makes it, for me, one of the most photogenic of all our resident birds.",
  ],
  "yelkouan-shearwater-at-sea": [
    "To photograph the Yelkouan shearwater (Puffinus yelkouan) you have to leave the land behind. This is a true seabird of the Mediterranean, spending almost its entire life over open water and coming ashore only to breed, on remote islands and cliffs, under cover of darkness.",
    "I made this image from a small boat off the Algerian coast, soon after dawn. Shearwaters fly in a way no land bird does — long stiff wings held flat, banking low along the troughs of the swell, tilting from side to side so that they show first their dark upperparts and then their pale bellies, barely a wingbeat between glides.",
    "Photographing them is a test of balance and timing. The boat is moving, the sea is moving, the bird is fast and low, and the autofocus has to find a grey bird against grey-blue water. For every frame like this one there are dozens of misses — a wingtip clipped, the bird lost behind a wave, the horizon thrown askew.",
    "The Yelkouan shearwater is a Mediterranean near-endemic and a species of real conservation concern, threatened at its breeding colonies by introduced predators and at sea by fishing bycatch. Algerian waters are an important part of its range, yet it is rarely seen by anyone who does not go looking for it offshore.",
    "I love this picture for its emptiness — one bird, the open sea, and the soft band of haze where the water meets the sky. It is the portrait of a life lived entirely on the wind and the waves.",
  ],
  "firecrest-the-smallest-jewel": [
    "The common firecrest (Regulus ignicapilla) is, together with its cousin the goldcrest, the smallest bird in Algeria — and one of the smallest in the world. A full-grown adult weighs around five or six grams, less than a sheet of paper, yet it carries on its crown a blaze of orange and yellow that gives the bird its name.",
    "This individual is carrying a small feather in its bill — nesting material, gathered to line the tiny hanging cup it builds high in a conifer. Catching that detail was pure luck and pure patience: firecrests never stop moving, flitting through the foliage in a constant, twitchy search for insects, rarely pausing for more than a second.",
    "I photographed it in the conifer forest of the Atlas, where firecrests are resident year-round. The difficulty is never finding them — their thin, high call gives them away — but rather getting a clear shot as they work through the dense needles. I waited beneath one favoured tree for a long time before this bird dropped to an open branch at eye level.",
    "Working with a bird this small demands a long lens, a close approach and a lot of failed frames. The depth of field is paper-thin; a few centimetres of movement and the eye is soft. When everything aligns, though, the reward is a portrait of an animal most people never see well, despite it living all around them.",
    "There is something humbling about a creature so tiny surviving the Atlas winters, raising broods, and crossing mountains. The firecrest is, gram for gram, one of the most remarkable birds I photograph in Algeria.",
  ],
  "black-redstart-on-bare-ground": [
    "The black redstart (Phoenicurus ochruros) is a bird of hard, open places. Sooty grey-black, the male carries a single flash of colour — a rust-red tail that he quivers constantly, a small flame against the dull ground. Here one pauses on a mound of broken red earth, the bare, stony habitat it loves.",
    "In Algeria the black redstart is both a resident and a winter visitor, its numbers swelling in the colder months as birds arrive from the mountains of Europe. It is remarkably adaptable, equally at home on a high rocky crag, a quarry face, a building site or the flat roof of a house in the middle of a town.",
    "This image was made in winter on rough, eroded ground in northern Algeria. I liked the simplicity of it: the muted, dusty pinks and ochres of the out-of-focus background, broken only by the bird and the warm note of its tail. There was no need for a green leaf or a pretty perch — the bare earth is the bird's true world.",
    "Black redstarts are confiding by warbler standards, but they keep a working distance and move on quickly, dropping to the ground to snatch an insect and bobbing up onto a new vantage point. I followed this one from rock to rock for half an hour before it settled close enough, at the right angle to the low winter sun.",
    "It is an unshowy bird, easy to walk past. But sit with a black redstart for a while, watch that endlessly trembling red tail, and it becomes one of the small, quiet pleasures of an Algerian winter.",
  ],
  "great-tit-of-the-atlas": [
    "The great tit (Parus major) is one of the most familiar birds in Algeria — a bold, active, yellow-and-black bird of woodland, orchard and garden, known to almost everyone who keeps an eye on the trees. This is a young bird, its colours still soft, working through the canopy of an Atlas oak.",
    "Familiarity is exactly why it is worth photographing well. A common bird in a clean, well-lit frame is far harder to achieve than people imagine: the great tit is never still, hopping and hanging acrobatically among the twigs as it searches bark and bud for insects, rarely offering more than a fleeting clear view.",
    "I made this picture in the woods of the Atlas Blidéen, in the soft, broken light that filters through the canopy in autumn. I wanted to keep the feeling of the bird in its element — half-hidden among branches, framed by green — rather than isolate it on a clean studio-like perch.",
    "The North African great tits belong to a distinct population, slightly different in tone from their European relatives, and they are residents here throughout the year. In winter they join roving mixed flocks with tits, firecrests and warblers that move through the forest together.",
    "Photographing the common birds well is, to me, the heart of this work. Anyone will stop for a rare species; it takes patience to give an everyday bird like the great tit the careful, considered portrait it deserves.",
  ],
};

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const coverPhoto = allPhotos[post.photoIndex];
  const content = postContent[slug] ?? ["Field notes coming soon."];
  const related = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[400px] overflow-hidden bg-charcoal">
        <Image src={coverPhoto.src} alt={post.title} fill className={`object-cover ${coverPhoto.pos ?? ""}`} preload sizes="100vw" />
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
              const rPhoto = allPhotos[rp.photoIndex];
              return (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                  <div className="relative aspect-[16/9] overflow-hidden mb-4 bg-warm-gray">
                    <Image src={rPhoto.src} alt={rp.title} fill className={`object-cover transition-transform duration-700 group-hover:scale-105 ${rPhoto.pos ?? ""}`} sizes="(max-width: 768px) 100vw, 50vw" />
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
