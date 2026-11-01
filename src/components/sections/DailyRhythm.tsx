// src/components/sections/DailyRhythm.tsx

"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import type { DailyRythm } from "@/types/daily-rythm";
import SectionHeading from "@/components/ui/SectionHeading";
import { colorAccentBg } from "@/lib/color-accents";
import { cnj } from "@/utils/class-name-joiner";

export default function DailyRhythm({ steps }: { steps: DailyRythm[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 65%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <section className="mx-auto max-w-6xl px-6 pb-28">
      <SectionHeading title="A day at PaintCare">
        A steady rhythm gives children the security to be adventurous.
      </SectionHeading>

      <ol
        ref={ref}
        className="relative mt-14 space-y-10 pl-10 md:ml-34 md:pl-14"
      >
        <span
          aria-hidden="true"
          className="absolute left-3 top-2 h-[calc(100%-1rem)] w-1 rounded-full bg-ink/10 md:left-5"
        />
        <motion.span
          aria-hidden="true"
          style={{ scaleY }}
          className="absolute left-3 top-2 h-[calc(100%-1rem)] w-1 origin-top rounded-full bg-green-200 md:left-5"
        />
        {steps.map((step) => (
          <li key={step.id} className="relative">
            <span
              aria-hidden="true"
              className={cnj(
                "absolute left-[-2.35rem] top-1.5 size-5 rounded-full ring-4 ring-chalk md:left-[-3.35rem]",
                colorAccentBg[step.colorAccent],
              )}
            />
            <time className="font-display text-2xl text-ink md:absolute md:-left-38 md:top-0 md:w-24 md:text-right">
              {step.time}
            </time>
            <h3 className="mt-1 text-2xl font-medium md:mt-0">{step.title}</h3>
            <p className="mt-1 max-w-md text-ink/80">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
