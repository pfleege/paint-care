// src/components/sections/Hero.tsx

import Button from "../ui/Button";
import CdnImage from "@/components/ui/CdnImage";
import { PLACEHOLDER } from "@/lib/images";
import type { CdnImageData } from "@/types/images";

const HEADLINE = "Where every child paints their own day.";

type Props = {
  headline?: string;
  intro?: string;
  image?: CdnImageData;
};

export default function Hero({
  headline = HEADLINE,
  intro = "Paintbox is a small private kindergarten in Helsinki. We make space for play, big feelings and muddy boots, so every child feels seen.",
  image = {
    path: `2022/12/17/12/59/fuzzy-7661669_1280.jpg`,
    alt: "Smiling children playing with colourful paint",
  },
}: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-36 md:grid-cols-[1.15fr_0.85fr] md:pb-32 md:pt-44">
        <div>
          <h1 className="text-5xl font-medium sm:text-6xl lg:text-7xl">
            {headline}
          </h1>
          <p className="mt-7 max-w-lg text-lg text-ink/85 md:text-xl">
            {intro}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/contact" size="sm">
              Book a visit
            </Button>
            <Button href="/programs" size="sm" tone="chalk">
              See our programs
            </Button>
          </div>
        </div>
        <div className="animate-morph relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden bg-mint/30 shadow-[0_30px_60px_-30px_rgba(42,33,80,0.5)]">
          <CdnImage
            {...image}
            priority
            sizes="(min-width: 768px) 28rem, 90vw"
            fallbackClassName="bg-mint/50"
          />
        </div>
      </div>
    </section>
  );
}
