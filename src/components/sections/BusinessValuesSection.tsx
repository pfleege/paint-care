// src/components/sections/BusinessValuesSection.tsx
import { BusinessValue } from "@/types/business-values";

export default function BusinessValuesSection({
  values,
}: {
  values: BusinessValue[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <h2 className="text-4xl font-medium md:text-6xl">What we care about</h2>
      <ul className="mt-16 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <li key={value.id}>
            <h3 className="text-3xl font-medium">{value.title}</h3>
            <p className="mt-3 text-ink/90">{value.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
