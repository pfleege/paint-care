// src/components/ui/ImageSlider.tsx

"use client";

import { useState } from "react";
import type { GallerySlide } from "@/types/images";
import CdnImage from "./CdnImage";
import { colorAccentBg, colorAccentText } from "@/lib/color-accents";
import { cnj } from "@/utils/class-name-joiner";
import PaintBlob from "./PaintBlob";

export default function ImageSlider({ slides }: { slides: GallerySlide[] }) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const slide = slides[index];

  //   const slideSelector = (delta: number) =>
  //     setIndex((i) => (i + delta + count) % count);

  const goTo = (target: number) => setIndex(index + target);

  return (
    <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <div className="relative mx-auto aspect-square w-full max-w-xl">
        <PaintBlob
          seed={index * 3 + 4}
          className={cnj(
            "absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] transition-colors duration-700",
            colorAccentText[slide.colorAccent],
          )}
        />
        <div className="animate-morph absolute inset-0 overflow-hidden bg-chalk">
          <CdnImage
            {...slide.image}
            sizes="(min-width: 768px) 36rem, 90vw"
            fallbackClassName={cnj(
              colorAccentBg[slide.colorAccent],
              "opacity-60",
            )}
          />
        </div>
      </div>

      <div>
        <h3 className="text-4xl font-medium md:text-5xl">{slide.title}</h3>
        <p className="mt-4 max-w-sm text-lg text-ink/80">{slide.caption}</p>
        {/* <div className="mt-10 flex gap-4">
          <button type="button" onClick={() => slideSelector(-1)}>
            Previous
          </button>
          <button type="button" onClick={() => slideSelector(1)}>
            Next
          </button>
        </div> */}
        <div className="mt-10 flex items-center gap-5">
          <button
            type="button"
            onClick={() => goTo(-1)}
            aria-label="Previous slide"
            className="grid size-12 place-items-center rounded-full bg-ink text-chalk transition-transform hover:-translate-x-1"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(1)}
            aria-label="Next slide"
            className="grid size-12 place-items-center rounded-full bg-ink text-chalk transition-transform hover:translate-x-1"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="ml-2 flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show slide ${i + 1}: ${s.title}`}
                aria-current={i === index}
                className={cnj(
                  "h-3 rounded-full transition-all duration-300",
                  i === index
                    ? cnj("w-8", colorAccentBg[s.colorAccent])
                    : "w-3 bg-ink/20 hover:bg-ink/40",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
