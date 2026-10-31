// src/components/sections/DailyRhythm.tsx

import type { DailyRythm } from "@/types/daily-rythm";
import SectionHeading from "@/components/ui/SectionHeading";

export default function DailyRhythm({ steps }: { steps: DailyRythm[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28">
      <SectionHeading title="A day at PaintCare">
        A steady rhythm gives children the security to be adventurous.
      </SectionHeading>

      <ol className="mt-14 space-y-10">
        {steps.map((step) => (
          <li key={step.id}>
            <time className="font-display text-2xl text-ink">{step.time}</time>
            <h3 className="mt-1 text-2xl font-medium">{step.title}</h3>
            <p className="mt-1 max-w-md text-ink/80">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
