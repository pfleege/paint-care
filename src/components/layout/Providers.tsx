// src/components/layout/Providers.tsx

"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";
import SmoothScroll from "./SmoothScroll";

/* Client-side providers: respects reduced-motion + smooth scrolling. */
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>{children}</SmoothScroll>
    </MotionConfig>
  );
}
