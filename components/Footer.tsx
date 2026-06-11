import Image from "@/components/Photo";
import Link from "next/link";
import { allPhotos } from "@/lib/photos";

const closing = allPhotos[12]; // Great Cormorant over silver water

export default function Footer() {
  return (
    <footer>
      {/* Closing image band */}
      <div className="relative h-[40vh] min-h-[280px] overflow-hidden bg-charcoal">
        <Image
          src={closing.src}
          alt={closing.alt}
          fill
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-serif italic text-2xl md:text-3xl text-white font-light mb-6">
            Field notes from Algeria, occasionally.
          </p>
          <Link
            href="/blog"
            className="border border-white/60 text-white text-xs tracking-[0.3em] uppercase px-6 py-3 hover:bg-white hover:text-charcoal transition-all duration-300"
          >
            Read the Journal
          </Link>
        </div>
      </div>

      <div className="border-t border-warm-gray bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <p className="font-serif text-lg tracking-widest uppercase font-light mb-3">
                Abdelmalek Ouksili
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Birds and wildlife of Algeria — from the cedar forests of the
                Atlas to the Mediterranean coast.
              </p>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-muted mb-4">
                Explore
              </p>
              <ul className="space-y-2">
                {[
                  ["Portfolio", "/portfolio"],
                  ["About", "/about"],
                  ["Journal", "/blog"],
                  ["Print Store", "/store"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted hover:text-charcoal transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-muted mb-4">
                Connect
              </p>
              <ul className="space-y-2">
                {[
                  ["Instagram", "https://instagram.com"],
                  ["500px", "https://500px.com/p/abdelmalekouksili"],
                  ["LinkedIn", "https://linkedin.com"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-charcoal transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-warm-gray pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted tracking-wide">
              © {new Date().getFullYear()} Abdelmalek Ouksili. All rights reserved.
            </p>
            <p className="text-xs text-muted tracking-wide">
              All photographs are protected by copyright.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
