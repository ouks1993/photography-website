import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-warm-gray bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="font-serif text-lg tracking-widest uppercase font-light mb-3">
              Abdelmalek Ouksili
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Wildlife photography from the world's most remote and breathtaking
              landscapes.
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
                ["500px", "https://500px.com"],
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
    </footer>
  );
}
