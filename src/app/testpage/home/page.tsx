// src/app/testpage/home/page.tsx

import BusinessValuesSection from "@/components/sections/BusinessValuesSection";
import CallToAction from "@/components/sections/CallToAction";
import Hero from "@/components/sections/Hero";
import { getBusinessValues } from "@/db/queries/business-values";

export default async function TestHomePage() {
  const values = await getBusinessValues();

  return (
    <>
      <Hero />
      <BusinessValuesSection values={values} />
      <CallToAction />
    </>
  );
}
