// src/components/ui/SectionHeading.tsx

import Image from "next/image";
import { cnj } from "@/utils/class-name-joiner";
import PaintedUnderline from "./PaintedUnderline";

type Props = {
  title: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  title,
  align = "left",
  className,
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
        <h2 className="text-3xl z-1 font-medium md:text-4xl">{title}</h2>
        <PaintedUnderline />
      </div>
    </div>
  );
}
