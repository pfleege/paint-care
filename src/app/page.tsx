// src/app/page.tsx

import BusinessValuesSection from "@/components/sections/BusinessValuesSection";
import CallToAction from "@/components/sections/CallToAction";
import Hero from "@/components/sections/Hero";
import GallerySection from "@/components/sections/GallerySection";
import { getBusinessValues } from "@/db/queries/business-values";
import { getImageGallery } from "@/db/queries/image-gallery";
// import PhysicsCanvas from "@/components/effects/PhysicsCanvas";
import PlaygroundSection from "@/components/sections/PlaygroundSection";

export default async function TestHomePage() {
  const values = await getBusinessValues();
  const gallery = await getImageGallery();

  return (
    <>
      <Hero />
      {/* <PhysicsCanvas /> */}
      <BusinessValuesSection values={values} />
      <PlaygroundSection />
      <GallerySection slides={gallery} />
      <CallToAction />
    </>
  );
}
