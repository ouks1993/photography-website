"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import type { PrintMeta } from "../../page";

export default function PrintDetailForm({ print, imageUrl }: { print: PrintMeta; imageUrl: string | null }) {
  const [selectedSize, setSelectedSize] = useState(print.prices[0]);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function handleAddToCart() {
    addItem({
      id: print.id,
      title: print.title,
      size: selectedSize.size as "8×10\"" | "11×14\"" | "16×20\"" | "20×30\"",
      price: selectedSize.price,
      image: imageUrl ?? "",
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  return (
    <div className="md:pt-4">
      <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3 font-sans">{print.location}</p>
      <h1 className="font-serif text-4xl md:text-5xl italic font-light mb-4">{print.title}</h1>
      <p className="text-muted leading-relaxed mb-8">{print.description}</p>

      <div className="mb-8">
        <p className="text-xs tracking-widest uppercase text-muted mb-3 font-sans">Select Size</p>
        <div className="grid grid-cols-2 gap-3">
          {print.prices.map((option) => (
            <button
              key={option.size}
              onClick={() => setSelectedSize(option)}
              className={`px-4 py-3 border text-sm transition-colors text-left ${
                selectedSize.size === option.size
                  ? "border-charcoal bg-charcoal text-cream"
                  : "border-warm-gray text-muted hover:border-charcoal hover:text-charcoal"
              }`}
            >
              <span className="block font-sans">{option.size}</span>
              <span className="block text-xs mt-0.5 opacity-70">${option.price}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mb-6 py-4 border-y border-warm-gray">
        <span className="text-sm text-muted font-sans">Total</span>
        <span className="text-2xl font-medium text-charcoal font-sans">${selectedSize.price}</span>
      </div>

      <button
        onClick={handleAddToCart}
        className={`w-full py-4 text-xs tracking-[0.3em] uppercase transition-all duration-300 ${
          added ? "bg-accent text-cream" : "bg-charcoal text-cream hover:bg-accent"
        }`}
      >
        {added ? "Added to Cart ✓" : "Add to Cart"}
      </button>

      <Link
        href="/store/cart"
        className="block text-center mt-3 text-xs tracking-widest uppercase text-muted hover:text-charcoal transition-colors"
      >
        View Cart
      </Link>

      <div className="mt-10 pt-8 border-t border-warm-gray space-y-3">
        {[
          ["Medium", "Giclée print on Hahnemühle Photo Rag 308gsm"],
          ["Edition", "Limited to 50 prints per size"],
          ["Includes", "Hand signature + Certificate of Authenticity"],
          ["Shipping", "Worldwide tracked, 5–7 business days"],
        ].map(([label, value]) => (
          <div key={label} className="flex gap-4 text-sm">
            <span className="text-muted w-20 shrink-0">{label}</span>
            <span className="text-charcoal">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
