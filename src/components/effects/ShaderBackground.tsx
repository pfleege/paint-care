// src/components/effects/ShaderBackground.tsx

"use client";

import { useRef } from "react";
import { MeshGradient } from "@paper-design/shaders-react";
import { useInView, useReducedMotion } from "motion/react";
import { cnj } from "@/utils/class-name-joiner";

type Props = { colors?: string[]; className?: string };

export default function ShaderBackground({
  colors = ["#FFFF05", "#FF4C82", "#BFE3FF", "#9DF504"],
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduce = useReducedMotion();

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cnj("absolute inset-0", className)}
    >
      <MeshGradient
        style={{ width: "100%", height: "100%" }}
        colors={colors}
        distortion={0.9}
        swirl={0.5}
        speed={reduce || !inView ? 0 : 0.2}
        minPixelRatio={1}
        maxPixelCount={1280 * 720}
      />
    </div>
  );
}
