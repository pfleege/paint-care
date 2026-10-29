// src/components/ui/PaintedUnderline.tsx

"use client";

import { cnj } from "@/utils/class-name-joiner";
import { motion } from "motion/react";

export default function PaintedUnderline({
  className,
}: {
  className?: string;
}) {
  //   return (
  //     <svg
  //       viewBox="0 0 300 20"
  //       preserveAspectRatio="none"
  //       aria-hidden="true"
  //       className={cnj("inline-block h-3 w-full", className)}
  //     >
  //       <motion.path
  //         d="M4 12 C 60 2, 120 18, 180 8 S 270 6, 296 11"
  //         fill="none"
  //         stroke="currentColor"
  //         strokeWidth={6}
  //         strokeLinecap="round"
  //         // vectorEffect="non-scaling-stroke"
  //         initial={{ pathLength: 0 }}
  //         whileInView={{ pathLength: 1 }}
  //         viewport={{ once: true, margin: "-10%" }}
  //         transition={{ duration: 0.9, ease: "easeOut" }}
  //       />
  //     </svg>
  //   );
  // }
  return (
    <motion.svg
      viewBox="0 0 300 20"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cnj("block h-3 w-full", className)}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <path
        d="M3 12 C 60 2, 120 18, 180 8 S 270 6, 297 11"
        fill="none"
        stroke="currentColor"
        strokeWidth={6}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </motion.svg>
  );
}
