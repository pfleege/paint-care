// src/lib/color-accents/index.ts

import type { ColorAccent } from "@/types/color-accents";

export const colorAccentText: Record<ColorAccent, string> = {
  tomato: "text-tomato",
  sun: "text-sun",
  mint: "text-mint",
  sky: "text-sky",
  grape: "text-grape",
  bubblegum: "text-bubblegum",
};

export const colorAccentBg: Record<ColorAccent, string> = {
  tomato: "bg-tomato",
  sun: "bg-sun",
  mint: "bg-mint",
  sky: "bg-sky",
  grape: "bg-grape",
  bubblegum: "bg-bubblegum",
};

export const colorAccentHex: Record<ColorAccent, string> = {
  tomato: "#FF5B45",
  sun: "#FFFFC2",
  mint: "#C2FFC2",
  sky: "#5FE2FF",
  grape: "#91FF5F",
  bubblegum: "#FF7EE1",
};
