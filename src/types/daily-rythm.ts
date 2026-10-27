// src/types/daily-rythm.ts

import { ColorAccent } from "./color-accents";

export type DailyRythm = {
  id: string;
  time: string;
  title: string;
  text: string;
  colorAccent: ColorAccent;
};
