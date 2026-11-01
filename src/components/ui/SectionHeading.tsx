// src/components/ui/SectionHeading.tsx

import type { ReactNode } from "react";
import { cnj } from "@/utils/class-name-joiner";
import PaintedUnderline from "./PaintedUnderline";

type Props = {
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
  underlineClassName?: string;
};

export default function SectionHeading({
  title,
  children,
  align = "left",
  className,
  underlineClassName,
}: Props) {
  return (
    <div
      className={cnj(
        "max-w-fit",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2 className="text-4xl font-medium md:text-6xl">{title}</h2>
      <PaintedUnderline
        className={cnj(
          "mt-4",
          align === "center" && "mx-auto",
          underlineClassName,
        )}
      />
      {children && (
        <p className="mt-5 max-w-prose text-lg text-ink/80">{children}</p>
      )}
    </div>
  );
}
