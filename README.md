# PaintCare Daycare Center (showcase)

![](./public/paint-care-hero.png)

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Webpack (no Turbopack)

A showcase website for a fictional private daycare center in Helsinki. It is a small, fully typed Next.js project built to practise component composition, animation and accessible UI, with a design built around paint blobs, rounded type and playful motion.

## Pages

| Route          | Description                                                          |
| -------------- | -------------------------------------------------------------------- |
| `/`            | Hero, values, physics playground, image gallery, call to action      |
| `/programs`    | Four age-group programs, a scroll-driven "day at PaintCare" timeline |
| `/contact`     | Contact details and a contact form                                   |
| `/api/contact` | POST endpoint that validates the form (name and email)               |

## Highlights

- **Typed, static content.** All text lives in `src/data/*.ts` with shared types, so components contain layout only.
- **Data access layer.** Pages call async functions in `src/db/queries/*.ts`. Today they return the static data; swap the bodies for database queries without touching any page or component.
- **Animation, layered by purpose.**
  - Motion (`motion/react`): entrances, shared-layout nav pill, slider, form transitions, scroll-linked timeline.
  - GSAP ScrollTrigger: parallax blobs in the hero.
  - Lenis: smooth scrolling, kept in sync with ScrollTrigger.
  - Paper Shaders: animated WebGL mesh-gradient hero background.
  - Matter.js: a draggable physics toy box on a `<canvas>`.
- **Performance-minded effects.** The shader and the physics engine are loaded lazily, and both pause when off-screen.
- **Accessibility.** Skip link, labelled landmarks, `aria-current`, `aria-live` on the slider, keyboard-operable carousel, alerts for form errors, and full `prefers-reduced-motion` support (CSS and JavaScript).
- **Graceful image fallback.** Images use the Pixabay CDN through `next/image`. Placeholder or failed images render a coloured block, so the layout never breaks.

## Getting started

Requires a current Node.js LTS (20.9 or newer) and npm.

```bash
npm install
npm run dev        # next dev --webpack, http://localhost:3000
```

| Script              | What it does                   |
| ------------------- | ------------------------------ |
| `npm run dev`       | Development server (Webpack)   |
| `npm run build`     | Production build (Webpack)     |
| `npm start`         | Serve the production build     |
| `npm run typecheck` | Type-check with `tsc --noEmit` |

`next.config.ts` is only read at start-up, so restart the dev server after changing it.

## Structure

- `src/data/` typed static content;
- `src/lib/` lib files such as color accent, paint blob and animation related files
- `src/utils/` utility function (class name joiner function for adding page specific classes)
- `src/db/queries` data access layers (swap for PostgreSQL here)
- `src/types/` type definitions
- `src/components/ui/` reusable primitives (Blob, Button, CdnImage, ImageSlider, PaintUnderline, SectionHeading)
- `src/components/effects/` ShaderBackground (Paper Shaders), ScrollParallax (GSAP), PhysicsPlayground (Matter.js)
- `src/components/layout/` Header, Footer, Providers, SmoothScroll (Lenis)
- `src/components/sections/` page sections;
- `src/app/` routes (/, /programs, /contact, /api/contact)

## Design system

Colours and fonts are defined once in `src/app/globals.css` inside `@theme`, which makes them available as Tailwind utilities (`bg-tomato`, `text-ink`, `font-display`, ...).

- **Palette:** `chalk`, `ink`, `tomato`, `sun`, `mint`, `sky`, `grape`, `bubblegum`
- **Fonts:** Fredoka Variable (headings), Nunito Variable (body), both self-hosted through Fontsource
- **Animations:** `animate-morph` (shifting border radius) and `animate-drift` (floating blobs)
  Content items carry an `accent` colour. Components look it up in the static class maps in `src/lib/accent.ts`, so Tailwind can see every class name at build time. Do not build class names dynamically (for example `` `bg-${accent}` ``).

## Editing content

- Site name, address, phone, email, opening hours and navigation: `src/data/site.ts`
- Programs, values, gallery slides and the daily rhythm: the matching file in `src/data/`
- Adding an item is a copy-paste of one object. The types in `src/data/types.ts` flag any missing field.

## Images (Pixabay CDN)

All image paths in `src/data/*.ts` still contain the `PIXABAY_PATH/...` placeholder, which renders a coloured fallback. To use a real photo, store only the path after `https://cdn.pixabay.com/photo/`:

```ts
image: { path: "2017/08/06/12/06/people-2591874_1280.jpg", alt: "Describe the photo" }
```

The hero image is the default `image` prop in `src/components/sections/Hero.tsx`. `next.config.ts` only allows images from `cdn.pixabay.com/photo/**`; add another host there if you use a different source. Always write meaningful `alt` text.

## Contact form and API

`ContactForm` posts JSON to `/api/contact`. The route handler validates that `name` is non-empty and `email` looks like an address, then returns `{ ok: true }` or a 400 with an error message. It does not store or send anything yet.

Quick test without the UI:

```bash
curl -i -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Anna","email":"anna@example.com"}'
```

To persist messages, insert into your database in `src/app/api/contact/route.ts`.

## Switching to a database

Only `src/db/queries/*.ts` needs to change. Keep the function signatures and replace the bodies with queries, for example with `pg`:

```ts
export async function getDaycareGroups(): Promise<DaycareGroup[]> {
  const { rows } = await pool.query("SELECT * FROM groups ORDER BY sort");
  return rows;
}
```

Put the connection string in `.env.local`:

```
DATABASE_URL=postgres://user:password@localhost:5432/paint-care
```

## Deployment

The site has no required environment variables, so any Node-capable Next.js host works. Run `npm run build` first and fix anything it reports; `npm start` serves the result. The build and dev scripts use `--webpack`, so keep that flag in your host's build command if it does not call `npm run build`.
