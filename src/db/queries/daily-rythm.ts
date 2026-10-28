// src/db/queries/daily-rythm.ts

import { dailyRhythm } from "@/data/daily-rythm";
import type { DailyRythm } from "@/types/daily-rythm";

export async function getDaylyRythm(): Promise<DailyRythm[]> {
  return dailyRhythm;
}
