// src/components/ui/CdnImage.tsx

"use client";

import Image from "next/image";
import { useState } from "react";
import { cdnUrl, isPlaceholder } from "@/lib/images";
import { cnj } from "@/utils/class-name-joiner";
import type { CdnImageData } from "@/types/images";

type Props = CdnImageData & {
  sizes: string;
  priority?: boolean;
  className?: string;
  fallbackClassName?: string;
};

export default function CdnImage({
  path,
  alt,
  sizes,
  priority,
  className,
  fallbackClassName = "bg-bubblegum/40",
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed || isPlaceholder(path)) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cnj("absolute inset-0", fallbackClassName, className)}
      />
    );
  }
  return (
    <Image
      src={cdnUrl(path)}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={cnj("object-cover", className)}
    />
  );
}
