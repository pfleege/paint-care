// src/components/sections/ContactForm.tsx

import Button from "@/components/ui/Button";

const field =
  "mt-1.5 w-full rounded-2xl border-2 border-ink/15 bg-white px-4 py-3 transition-colors focus:border-grape focus:outline-none";

export default function ContactForm({ ageGroups }: { ageGroups: string[] }) {
  return (
    <form className="space-y-5 rounded-[2.5rem] bg-white p-8 shadow-[0_30px_60px_-35px_rgba(42,33,80,0.5)] md:p-10">
      <label className="block font-display text-lg">
        Your name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block font-display text-lg">
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </label>
      <label className="block font-display text-lg">
        Your child&apos;s age group
        <select name="ageGroup" className={field} defaultValue="">
          <option value="">Not sure yet</option>
          {ageGroups.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
      </label>
      <label className="block font-display text-lg">
        Message
        <textarea name="message" rows={4} className={field} />
      </label>
      <Button size="sm" type="submit">
        Send message
      </Button>
    </form>
  );
}
