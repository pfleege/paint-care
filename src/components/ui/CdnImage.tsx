// src/components/ui/CdnImage.tsx

import Image from "next/image";
import { cdnUrl } from "@/lib/images";
import { cnj } from "@/utils/class-name-joiner";
import type { CdnImageData } from "@/types/images";

type Props = CdnImageData & {
  sizes: string;
  priority?: boolean;
  className?: string;
};

export default function CdnImage({
  path,
  alt,
  sizes,
  priority,
  className,
}: Props) {
  return (
    <Image
      src={cdnUrl(path)}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cnj("object-cover", className)}
    />
  );
}
