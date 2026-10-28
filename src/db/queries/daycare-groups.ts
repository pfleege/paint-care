// src/db/queries/daycare-groups.ts

import { daycareGroups } from "@/data/daycare-groups";
import type { DaycareGroup } from "@/types/daycare-group";

export async function getDaycareGroups(): Promise<DaycareGroup[]> {
  return daycareGroups;
}
