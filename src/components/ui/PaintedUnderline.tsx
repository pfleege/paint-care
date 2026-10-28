// src/components/ui/PaintedUnderline.tsx

import { cnj } from "@/utils/class-name-joiner";

export default function PaintedUnderline({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 300 20"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cnj("h-3 w-full dark:text-sun text-tomato", className)}
    >
      <path
        d="M4 12 C 60 2, 120 18, 180 8 S 270 6, 296 11"
        fill="none"
        stroke="currentColor"
        strokeWidth={6}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
