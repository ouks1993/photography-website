"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/CartProvider";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
  { href: "/store", label: "Store" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-cream/95 backdrop-blur-sm border-b border-warm-gray"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className={`font-serif text-sm md:text-base tracking-[0.2em] uppercase font-light transition-colors ${
            transparent ? "text-white" : "text-charcoal"
          }`}
        >
          Abdelmalek Ouksili
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs tracking-widest uppercase transition-colors ${
                transparent
                  ? "text-white/80 hover:text-white"
                  : "text-muted hover:text-charcoal"
              } ${pathname === href ? (transparent ? "text-white" : "text-charcoal") : ""}`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/store/cart"
            className={`text-xs tracking-widest uppercase transition-colors relative ${
              transparent
                ? "text-white/80 hover:text-white"
                : "text-muted hover:text-charcoal"
            }`}
          >
            Cart
            {count > 0 && (
              <span className="absolute -top-2 -right-3 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
                {count}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-1 ${
            transparent ? "text-white" : "text-charcoal"
          }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-current transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-cream border-t border-warm-gray overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs tracking-widest uppercase text-muted hover:text-charcoal transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/store/cart"
            className="text-xs tracking-widest uppercase text-muted hover:text-charcoal transition-colors"
          >
            Cart {count > 0 && `(${count})`}
          </Link>
        </div>
      </div>
    </header>
  );
}
