// src/components/ui/ImageSlider.tsx

"use client";

import { useState } from "react";
import type { GallerySlide } from "@/types/images";
import CdnImage from "./CdnImage";

export default function ImageSlider({ slides }: { slides: GallerySlide[] }) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const slide = slides[index];

  const slideSelector = (delta: number) =>
    setIndex((i) => (i + delta + count) % count);

  return (
    <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <div className="relative mx-auto aspect-square w-full max-w-xl overflow-hidden rounded-[3rem] bg-chalk">
        <CdnImage {...slide.image} sizes="(min-width: 768px) 36rem, 90vw" />
      </div>
      <div>
        <h3 className="text-4xl font-medium md:text-5xl">{slide.title}</h3>
        <p className="mt-4 max-w-sm text-lg text-ink/80">{slide.caption}</p>
        <div className="mt-10 flex gap-4">
          <button type="button" onClick={() => slideSelector(-1)}>
            Previous
          </button>
          <button type="button" onClick={() => slideSelector(1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
