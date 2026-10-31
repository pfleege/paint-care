// src/app/testpage/home/page.tsx

import BusinessValuesSection from "@/components/sections/BusinessValuesSection";
import CallToAction from "@/components/sections/CallToAction";
import Hero from "@/components/sections/Hero";
import GallerySection from "@/components/sections/GallerySection";
import { getBusinessValues } from "@/db/queries/business-values";
import { getImageGallery } from "@/db/queries/image-gallery";
import PhysicsCanvas from "@/components/effects/PhysicsCanvas";

export default async function TestHomePage() {
  // const values = await getBusinessValues();
  // const [values, gallery] = await Promise.all([getBusinessValues, getImageGallery]);
  const values = await getBusinessValues();
  const gallery = await getImageGallery();

  return (
    <>
      <Hero />
      <PhysicsCanvas />
      <BusinessValuesSection values={values} />
      <GallerySection slides={gallery} />
      <CallToAction />
    </>
  );
}
