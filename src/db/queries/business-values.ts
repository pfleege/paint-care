// src/db/queries/business-values.ts

import { businessValue } from "@/data/business-values";
import type { BusinessValue } from "@/types/business-values";

export async function getBusinessValues(): Promise<BusinessValue[]> {
  return businessValue;
}
