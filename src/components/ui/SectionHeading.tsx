// src/components/ui/SectionHeading.tsx

import Image from "next/image";
// import type { ReactNode } from "react";
import { cnj } from "@/utils/class-name-joiner";
import PaintedUnderline from "./PaintedUnderline";

type Props = {
  title: string;
  //   children?: ReactNode; // For future use
  align?: "left" | "center";
  className?: string;
  underlineClassName?: string;
};

export default function SectionHeading({
  title,
  //   children,
  align = "left",
  className,
  underlineClassName,
}: Props) {
  return (
    <div
      className={cnj(
        "max-w-2xl flex justify-center gap-8 dark:text-bubblegum text-grape",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Image
        className="h-50 w-auto"
        src="/paint-care-logo.png"
        alt="PaintCare logo"
        width={650}
        height={450}
        priority
      />
      <div className="flex flex-col justify-end pb-6">
        <h2 className="text-3xl font-medium md:text-4xl">{title}</h2>
        <PaintedUnderline
          className={cnj(
            "mt-2",
            align === "center" && "mx-auto",
            underlineClassName,
          )}
        />
        {/* {children && <p className="mt-5 max-w-prose text-lg text-ink/80">{children}</p>} */}
      </div>
    </div>
  );
}
