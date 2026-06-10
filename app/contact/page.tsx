"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");
    setTimeout(() => {
      setState("success");
      setForm({ name: "", email: "", subject: "general", message: "" });
    }, 1200);
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3 font-sans">
          Reach Out
        </p>
        <h1 className="font-serif text-5xl md:text-6xl font-light italic">
          Get in Touch
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left column — info */}
          <div>
            <p className="text-muted leading-relaxed mb-8">
              Whether you are interested in purchasing a print, booking a
              workshop, discussing editorial licensing, or simply want to say
              hello — I would love to hear from you. I try to respond within
              two business days.
            </p>

            <div className="space-y-8">
              {[
                {
                  label: "Print Inquiries",
                  text: "Questions about sizing, paper, framing, or large-format commissions.",
                },
                {
                  label: "Editorial Licensing",
                  text: "Image licensing for publications, books, advertising, and exhibitions.",
                },
                {
                  label: "Workshops",
                  text: "One-to-one mentoring and small group workshops in East Africa and India.",
                },
                {
                  label: "Press & Interviews",
                  text: "Media inquiries and speaking engagements.",
                },
              ].map(({ label, text }) => (
                <div key={label}>
                  <p className="text-xs tracking-widest uppercase text-charcoal mb-1.5 font-sans">
                    {label}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-warm-gray">
              <p className="text-xs tracking-widest uppercase text-muted mb-4 font-sans">
                Direct Contact
              </p>
              <a
                href="mailto:hello@abdelmalekphoto.com"
                className="text-charcoal hover:text-accent transition-colors text-sm"
              >
                hello@abdelmalekphoto.com
              </a>
            </div>
          </div>

          {/* Right column — form */}
          <div>
            {state === "success" ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl italic font-light mb-3">
                  Message Sent
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Thank you for getting in touch. I will get back to you as soon
                  as possible, typically within two business days.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="mt-6 text-xs tracking-widest uppercase text-muted hover:text-charcoal transition-colors border-b border-current pb-1"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted mb-2 font-sans">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-transparent border border-warm-gray px-4 py-3 text-sm text-charcoal placeholder:text-muted/50 focus:outline-none focus:border-charcoal transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted mb-2 font-sans">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-transparent border border-warm-gray px-4 py-3 text-sm text-charcoal placeholder:text-muted/50 focus:outline-none focus:border-charcoal transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted mb-2 font-sans">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-cream border border-warm-gray px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors appearance-none"
                  >
                    <option value="general">General Enquiry</option>
                    <option value="print">Print Purchase</option>
                    <option value="licensing">Editorial Licensing</option>
                    <option value="workshop">Workshop Booking</option>
                    <option value="press">Press &amp; Media</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted mb-2 font-sans">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me what you have in mind..."
                    className="w-full bg-transparent border border-warm-gray px-4 py-3 text-sm text-charcoal placeholder:text-muted/50 focus:outline-none focus:border-charcoal transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="w-full bg-charcoal text-cream py-4 text-xs tracking-[0.3em] uppercase hover:bg-accent transition-colors duration-300 disabled:opacity-60"
                >
                  {state === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
