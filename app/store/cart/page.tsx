"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { items, removeItem, total, count } = useCart();

  if (count === 0) {
    return (
      <section className="pt-32 pb-20 max-w-3xl mx-auto px-6 md:px-12 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3 font-sans">
          Your Cart
        </p>
        <h1 className="font-serif text-4xl italic font-light mb-6">
          Your cart is empty
        </h1>
        <p className="text-muted mb-8 leading-relaxed">
          Browse the print shop and choose a piece to bring the wild into your
          home.
        </p>
        <Link
          href="/store"
          className="inline-flex border border-charcoal text-charcoal text-xs tracking-[0.3em] uppercase px-8 py-3.5 hover:bg-charcoal hover:text-cream transition-all duration-300"
        >
          Browse Prints
        </Link>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 max-w-5xl mx-auto px-6 md:px-12">
      <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3 font-sans">
        Checkout
      </p>
      <h1 className="font-serif text-4xl italic font-light mb-12">
        Your Cart ({count})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Items */}
        <div className="lg:col-span-2 divide-y divide-warm-gray">
          {items.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="py-6 flex gap-5 items-start"
            >
              <div className="relative w-24 aspect-[4/3] shrink-0 overflow-hidden bg-warm-gray">
                {item.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-serif italic text-lg mb-1">{item.title}</p>
                <p className="text-xs text-muted font-sans mb-2">
                  {item.size} · Qty {item.quantity}
                </p>
                <p className="text-charcoal font-medium font-sans">
                  ${item.price * item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeItem(item.id, item.size)}
                className="text-xs text-muted hover:text-charcoal transition-colors tracking-widest uppercase font-sans"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-surface p-6 sticky top-24">
            <p className="text-xs tracking-widest uppercase text-muted mb-5 font-sans">
              Order Summary
            </p>
            <div className="divide-y divide-warm-gray mb-5">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="py-3 flex justify-between text-sm"
                >
                  <span className="text-muted">
                    {item.title} × {item.quantity}
                  </span>
                  <span className="text-charcoal font-sans">
                    ${item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-between py-4 border-t border-warm-gray font-medium">
              <span>Total</span>
              <span className="font-sans">${total}</span>
            </div>
            <button className="w-full mt-4 bg-charcoal text-cream py-4 text-xs tracking-[0.3em] uppercase hover:bg-accent transition-colors duration-300">
              Proceed to Checkout
            </button>
            <p className="text-xs text-muted text-center mt-3 leading-relaxed">
              Checkout integration coming soon. Contact me directly to order.
            </p>
            <div className="mt-4 text-center">
              <Link
                href="/contact"
                className="text-xs tracking-widest uppercase text-muted hover:text-charcoal transition-colors border-b border-current pb-1"
              >
                Contact to Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
