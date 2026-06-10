# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Warning: Non-standard Next.js version

This project uses **Next.js 16.2.9** with **React 19**. Many APIs differ from Next.js 13/14/15. Read `node_modules/next/dist/docs/` before making assumptions. Key breaking changes in effect:

- `params` in dynamic routes is `Promise<{ slug: string }>` — always `await params`
- `searchParams` in page components is also a Promise — always `await searchParams`

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run lint      # ESLint check
```

Type-check without building:
```bash
node node_modules/typescript/bin/tsc --noEmit
```

## Stack

- **Next.js 16** App Router, TypeScript, React 19
- **Tailwind CSS v4** — no `tailwind.config.js`; all config lives in `app/globals.css`
- **Fonts**: Cormorant Garamond (serif headings) + Inter (sans UI), loaded via `next/font/google` with CSS variables

## Tailwind v4 specifics

Config is in `app/globals.css` — not a config file:

```css
@import "tailwindcss";

@theme {
  --color-cream: #FAFAF8;       /* bg-cream, text-cream */
  --color-charcoal: #1A1A18;   /* bg-charcoal, text-charcoal */
  --color-accent: #7B6447;     /* bg-accent, text-accent */
  --color-warm-gray: #E8E6E0;  /* border-warm-gray */
  --color-muted: #6B6460;      /* text-muted */
  --color-surface: #F0EDE6;    /* bg-surface */
}

@theme inline {
  --font-serif: var(--font-cormorant);   /* font-serif utility */
  --font-sans: var(--font-inter);        /* font-sans utility */
}
```

Custom colors become Tailwind utilities automatically (e.g. `bg-accent`, `text-muted`). `@theme inline` is required for CSS vars that reference runtime values (font variables from `next/font`).

## Architecture

### Image data flow

Photos live in `public/images/` (31 JPEGs). The single source of truth is `lib/photos.ts`, which exports `allPhotos: LocalPhoto[]`. Pages import from this array directly — no API calls, no async fetching.

`lib/500px.ts` also exists but is **not used by any page** — it was a previous data source (the 500px CDN required signed URLs that expired; local images replaced it).

Use `next/image` (`<Image>`) for all photos in `public/images/` — Next.js optimizes them automatically. Do **not** use plain `<img>` tags for local images.

### Server vs. client components

All pages are **Server Components** by default. Client components are used only where state or browser APIs are needed:

| Component | Type | Reason |
|---|---|---|
| `components/Navigation.tsx` | Client | Scroll detection, mobile menu state, `usePathname` |
| `components/CartProvider.tsx` | Client | React Context for cart state across the app |
| `app/portfolio/_components/PhotoGallery.tsx` | Client | Filter state + lightbox state |
| `app/store/[id]/_components/PrintDetailForm.tsx` | Client | Size selection + add-to-cart |
| `app/contact/page.tsx` | Client | Form submission state |
| `app/store/cart/page.tsx` | Client | Reads cart from context |

The pattern for pages needing both data and interactivity: server component shell fetches/imports data → passes props to a nested `"use client"` component.

### Cart

`CartProvider` wraps the entire app in `layout.tsx`. `CartItem.size` type is `"8×10\"" | "11×14\"" | "16×20\"" | "20×30\""` — these are the exact strings used in `printsMeta` in `app/store/page.tsx`.

### Store data

`app/store/page.tsx` exports `printsMeta: PrintMeta[]` — the list of prints with `photoId` (index into `allPhotos`), prices, title, description. The detail page (`app/store/[id]/page.tsx`) and home page import from this export.

### Blog

`app/blog/page.tsx` exports `posts` array. `app/blog/[slug]/page.tsx` imports it for `generateStaticParams` and to look up the current post. Post body content is hardcoded in `postContent` record within the slug page.

## Adding new photos

1. Add JPEG to `public/images/`
2. Add an entry to `allPhotos` in `lib/photos.ts`
3. Reference by index where needed in pages

To convert non-JPEG files (PNG, TIFF) to web JPEG, use the script at `scripts/convert-images.mjs`:
```bash
node scripts/convert-images.mjs
```
(JPEG XL `.jxl` files are not supported by the installed sharp version and will be skipped.)
