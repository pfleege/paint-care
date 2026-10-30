// src/components/sections/GallerySection.tsx

import type { GallerySlide } from "@/types/images";
import ImageSlider from "../ui/ImageSlider";
import SectionHeading from "../ui/SectionHeading";

export default function GallerySection({ slides }: { slides: GallerySlide[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading title="A peek into our days" className="mb-16">
        Swipe, click or use your arrow keys to see what a normal Tuesday looks
        like.
      </SectionHeading>
      <ImageSlider slides={slides} />
    </section>
  );
}
