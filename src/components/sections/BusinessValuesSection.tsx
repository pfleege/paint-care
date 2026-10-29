// src/components/sections/BusinessValuesSection.tsx

import type { BusinessValue } from "@/types/business-values";
import { colorAccentText } from "@/lib/color-accents";
import { cnj } from "@/utils/class-name-joiner";
import PaintBlob from "../ui/PaintBlob";
import SectionHeading from "@/components/ui/SectionHeading";

const offsets = ["md:translate-y-0", "md:translate-y-24", "md:translate-y-8"];

export default function BusinessValuesSection({
  values,
}: {
  values: BusinessValue[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading title="What we care about">
        Three simple ideas shape every day at Paintbox. Everything else follows
        from them.
      </SectionHeading>

      <ul className="mt-16 grid gap-6 md:grid-cols-3">
        {values.map((value, i) => (
          <li
            key={value.id}
            className={cnj(
              "group relative isolate",
              offsets[i % offsets.length],
            )}
          >
            <PaintBlob
              seed={i * 9 + 2}
              className={cnj(
                "absolute inset-0 -z-10 h-full w-full transition-transform duration-700 ease-out group-hover:rotate-6 group-hover:scale-105",
                colorAccentText[value.colorAccent],
              )}
              preserveAspectRatio="none"
            />
            <div className="px-10 py-16 sm:px-14 md:px-9 md:py-20 lg:px-12">
              <h3 className="text-3xl font-medium">{value.title}</h3>
              <p className="mt-3 text-ink/90">{value.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
