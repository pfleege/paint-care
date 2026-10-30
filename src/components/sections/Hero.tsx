// src/components/sections/Hero.tsx

"use client";

import dynamic from "next/dynamic";
import Button from "../ui/Button";
import CdnImage from "@/components/ui/CdnImage";
import { motion } from "motion/react";
import type { CdnImageData } from "@/types/images";
import PaintBlob from "../ui/PaintBlob";
import ScrollParallax from "../effects/ScrollParallax";

// Load WebGL shader only after first paint so it never blocks the page.
const ShaderBackground = dynamic(
  () => import("@/components/effects/ShaderBackground"),
  { ssr: false },
);

const HEADLINE = "Where every child paints their own day.";

type Props = {
  headline?: string;
  intro?: string;
  image?: CdnImageData;
};

export default function Hero({
  headline = HEADLINE,
  intro = "PaintCare is a small private daycare center in Helsinki. We make space for play, big feelings and muddy boots, so every child feels seen.",
  image = {
    path: `2022/12/17/12/59/fuzzy-7661669_1280.jpg`,
    alt: "Smiling children playing with colourful paint",
  },
}: Props) {
  const words = headline.split(" ");
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background coloured canvas */}
      <div
        className="hero-fallback absolute inset-0 -z-20"
        aria-hidden="true"
      />
      <ShaderBackground />

      {/* <div className="mx-auto grid max-w-6xl items-top gap-14 px-6 pb-24 pt-36 md:grid-cols-[1.15fr_0.85fr] md:pb-32 md:pt-44"> */}
      <ScrollParallax className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-36 md:grid-cols-[1.15fr_0.85fr] md:pb-32 md:pt-44">
        <div>
          <h1 className="text-5xl font-medium sm:text-6xl lg:text-7xl">
            {words.map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden pb-2 align-bottom"
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", rotate: 5 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.09,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                  {i < words.length - 1 ? "\u00A0" : ""}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            className="mt-7 max-w-lg text-lg text-ink/85 md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {intro}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap h-fit gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.7 }}
          >
            <div className="flex gap-4">
              <Button href="/contact" size="sm">
                Book a visit
              </Button>
              <Button href="/programs" size="sm" tone="chalk">
                See our programs
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div data-speed="0.5" className="absolute -left-10 -top-10 w-40">
            <PaintBlob
              seed={3}
              className="animate-drift text-sun mix-blend-multiply"
            />
          </div>
          <div
            data-speed="-0.2"
            data-rotate="60"
            className="absolute -bottom-8 -right-8 w-44"
          >
            <PaintBlob
              seed={25}
              className="animate-drift text-tomato mix-blend-multiply [animation-delay:-3s]"
            />
          </div>
          <div data-speed="0.3" className="absolute -right-4 top-6 w-20">
            <PaintBlob
              seed={14}
              className="animate-drift text-sky mix-blend-multiply [animation-delay:-6s]"
            />
          </div>
          <div className="animate-morph relative aspect-4/5 overflow-hidden bg-mint/30 shadow-[0_30px_60px_-30px_rgba(42,33,80,0.5)]">
            <CdnImage
              {...image}
              priority
              sizes="(min-width: 768px) 28rem, 90vw"
              fallbackClassName="bg-mint/50"
            />
          </div>
        </motion.div>
      </ScrollParallax>
    </section>
  );
}
