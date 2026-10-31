// src/components/sections/PageIntro.tsx

import type { ReactNode } from "react";
import PaintBlob from "../ui/PaintBlob";
import type { ColorAccent } from "@/types/color-accents";
import { colorAccentText } from "@/lib/color-accents";
import { cnj } from "@/utils/class-name-joiner";

type Props = { title: string; children: ReactNode; accent?: ColorAccent };

export default function PageIntro({ title, children, accent = "sun" }: Props) {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-16 pt-40 md:pb-24 md:pt-48">
      <PaintBlob
        seed={12}
        className={cnj(
          "absolute -right-16 top-10 -z-10 w-80 opacity-70",
          colorAccentText[accent],
        )}
      />
      <PaintBlob
        seed={31}
        className="absolute left-10 top-24 -z-10 hidden w-24 text-sky/70 md:block"
      />
      <div className="mx-auto max-w-6xl">
        <h1 className="max-w-3xl text-5xl font-medium md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-xl text-lg text-ink/85 md:text-xl">
          {children}
        </p>
      </div>
    </section>
  );
}
