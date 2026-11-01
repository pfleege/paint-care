// src/components/layout/SmoothScroll.tsx

"use client";

import type { ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import { ScrollTrigger } from "@/lib/animation/gsap";

/* Function for keeping GSAP ScrollTrigger in sync with Lenis' virtual scroll position. */
function ScrollTriggerSync() {
  useLenis(() => ScrollTrigger.update());
  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: !reduce }}>
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
