// src/components/effects/ScrollParallax.tsx

"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/animation/gsap";

type Props = { children: ReactNode; className?: string };

/**
 * GSAP ScrollTrigger parallax:
 * Positive 'data-speed' -> element difts upward, negative downward
 * while the container scrolls through the viewport.
 * The optional `data-rotate' adds a gentle spin.
 * Note! Disabled automatically for prefers-reduced-motion.
 */
export default function ScrollParallax({ children, className }: Props) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
          const speed = parseFloat(el.dataset.speed ?? "0.2");
          const rotate = parseFloat(el.dataset.rotate ?? "0");
          gsap.to(el, {
            y: -speed * 220,
            rotate,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
