// src/types/images.ts

import { ColorAccent } from "./color-accents";

export type CdnImageData = { path: string; alt: string };

export type GallerySlide = {
  id: string;
  title: string;
  caption: string;
  colorAccent: ColorAccent;
  image: CdnImageData;
};
