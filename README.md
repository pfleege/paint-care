# PaintCare Daycare Center (showcase)

![](./public/paint-care-hero.png)

Next.js 16 · TypeScript · Tailwind CSS v4 · Webpack (no Turbopack)

## About

A playful showcase project of a fictional daycare center.

## Run

    npm install
    npm run dev      # next dev --webpack
    npm run build    # next build --webpack
    npm start

## Images (Pixabay CDN)

All image paths live in `src/data/*.ts` and still contain the `PIXABAY_PATH/...` placeholder,
which renders a coloured fallback. Replace each with the path after `https://cdn.pixabay.com/photo/`, e.g.
`2017/08/06/12/06/people-2591874_1280.jpg`. The Hero image is set in `src/components/sections/Hero.tsx`.

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
