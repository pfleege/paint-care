// src/components/sections/ProgramList.tsx

import type { DaycareGroup } from "@/types/daycare-group";

export default function ProgramList({
  programs,
}: {
  programs: DaycareGroup[];
}) {
  return (
    <section className="mx-auto max-w-6xl space-y-24 px-6 pb-24">
      {programs.map((program) => (
        <article key={program.id}>
          <p>{program.ages}</p>
          <h2 className="text-4xl font-medium md:text-5xl">{program.name}</h2>
          <p className="mt-4 max-w-md text-lg text-ink/85">{program.summary}</p>
          <ul className="mt-6 space-y-2">
            {program.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink/70">{program.groupSize}</p>
        </article>
      ))}
    </section>
  );
}
