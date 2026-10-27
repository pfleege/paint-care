// src/types/business-values.ts

import { ColorAccent } from "./color-accents";

export type BusinessValue = {
  id: string;
  title: string;
  text: string;
  colorAccent: ColorAccent;
};
