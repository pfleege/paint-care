// src/db/queries/image-gallery.ts

import { imageGallery } from "@/data/image-gallery";
import type { GallerySlide } from "@/types/images";

export async function getBusinessValues(): Promise<GallerySlide[]> {
  return imageGallery;
}
