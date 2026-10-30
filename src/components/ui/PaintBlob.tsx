// src/components/ui/PaintBlob.tsx

import type { SVGProps } from "react";
import { blobShape } from "@/lib/animation/blob-shape";
import { cnj } from "@/utils/class-name-joiner";

type BlobProps = SVGProps<SVGSVGElement> & { seed?: number };

export default function PaintBlob({ seed = 1, className, ...rest }: BlobProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
      className={cnj("block", className)}
      {...rest}
    >
      <path d={blobShape(seed)} fill="currentColor" />
    </svg>
  );
}
