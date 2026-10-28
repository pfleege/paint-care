// src/types/daycare-group.ts

import { ColorAccent } from "./color-accents";
import { CdnImageData } from "./images";

export type DaycareGroup = {
  id: string;
  name: string;
  ages: string;
  groupSize: string;
  summary: string;
  features: string[];
  accent: ColorAccent;
  image: CdnImageData;
};
