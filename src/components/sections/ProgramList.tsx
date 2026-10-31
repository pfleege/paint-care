// src/components/sections/ProgramList.tsx

import type { DaycareGroup } from "@/types/daycare-group";
import { colorAccentBg, colorAccentText } from "@/lib/color-accents";
import { cnj } from "@/utils/class-name-joiner";
import PaintBlob from "../ui/PaintBlob";
import CdnImage from "@/components/ui/CdnImage";

export default function ProgramList({
  programs,
}: {
  programs: DaycareGroup[];
}) {
  return (
    <section className="mx-auto max-w-6xl space-y-24 px-6 pb-24">
      {programs.map((program, i) => (
        <article
          key={program.id}
          className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
        >
          <div className="relative mx-auto aspect-5/4 w-full max-w-lg">
            <PaintBlob
              seed={i * 5 + 1}
              className={cnj(
                "absolute -inset-5 h-[calc(100%+2.5rem)] w-[calc(100%+2.5rem)]",
                colorAccentText[program.accent],
              )}
              preserveAspectRatio="none"
            />
            <div className="animate-morph absolute inset-0 overflow-hidden bg-chalk">
              <CdnImage
                {...program.image}
                sizes="(min-width: 768px) 32rem, 90vw"
                fallbackClassName={cnj(
                  colorAccentBg[program.accent],
                  "opacity-40",
                )}
              />
            </div>
          </div>

          <div>
            <p
              className={cnj(
                "inline-block rounded-full px-4 py-1 font-display text-base",
                colorAccentBg[program.accent],
              )}
            >
              {program.ages}
            </p>
            <h2 className="mt-4 text-4xl font-medium md:text-5xl">
              {program.name}
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink/85">
              {program.summary}
            </p>
            <ul className="mt-6 space-y-2">
              {program.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className={cnj(
                      "mt-2.5 size-3 shrink-0 rounded-full",
                      colorAccentBg[program.accent],
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink/70">{program.groupSize}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
