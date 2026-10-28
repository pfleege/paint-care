// src/components/ui/Button.tsx

import Link from "next/link";
import type { ReactNode } from "react";
import { cnj } from "@/utils/class-name-joiner";

type ButtonProps = { children: ReactNode; href?: string; className?: string };

export default function Button({ children, href, className }: ButtonProps) {
  const classes = cnj(
    "inline-flex rounded-full bg-ink px-8 py-4 font-display text-lg text-chalk",
    className,
  );
  return href ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
