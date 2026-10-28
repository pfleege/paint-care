// src/components/ui/Button.tsx

import Link from "next/link";
import type { ReactNode } from "react";
import { cnj } from "@/utils/class-name-joiner";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  size: "sm" | "md";
  tone?: "ink" | "chalk";
  className?: string;
  onClick?: () => void;
};

const tones = {
  ink: "bg-ink text-chalk hover:text-ink focus-visible:text-ink",
  chalk: "bg-chalk text-ink border-2 border-ink dark:border-sky",
};
const sizes = { sm: "px-5 py-2.5 text-base", md: "px-8 py-4 text-lg" };

export default function Button({
  children,
  href,
  type = "button",
  disabled,
  size = "md",
  tone = "ink",
  className,
  onClick,
}: ButtonProps) {
  //   const classes = cnj(
  //     "inline-flex rounded-full bg-ink px-8 py-4 font-display text-lg text-chalk",
  //     className,
  //   );

  const classes = cnj(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-display font-medium",
    // "bg-ink px-8 py-4 text-lg text-chalk transition-colors duration-500 hover:text-ink hover:cursor-pointer",
    "transition-colors duration-1000 disabled:opacity-60 hover:cursor-pointer",
    tones[tone],
    sizes[size],
    className,
  );
  const inner = (
    <>
      <span
        aria-hidden="true"
        className="absolute left-0 top-full aspect-square w-[160%] -translate-x-3 bg-sky transition-transform duration-1000 ease-in-out group-hover:translate-y-[-70%]"
      />
      <span className="relative z-10">{children}</span>
    </>
  );
  return href ? (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  ) : (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {inner}
    </button>
  );
}
