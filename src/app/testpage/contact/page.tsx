// src/app/testpage/contact/page.tsx

import type { Metadata } from "next";
import { getDaycareGroups } from "@/db/queries/daycare-groups";
import PageIntro from "@/components/sections/PageIntro";
import ContactDetails from "@/components/sections/ContactDetails";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default async function ContactPage() {
  const programs = await getDaycareGroups();

  return (
    <>
      <PageIntro title="Let's say hello." accent="bubblegum">
        Book a visit, ask a question or just tell us about your child. We read
        every message ourselves.
      </PageIntro>
      <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-28 md:grid-cols-[0.8fr_1.2fr]">
        <ContactDetails />
        <ContactForm ageGroups={programs.map((p) => `${p.name} (${p.ages})`)} />
      </section>
    </>
  );
}
