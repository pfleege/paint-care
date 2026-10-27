// src/utils/class-name-joiner.ts

import type { ClassNameValue } from "@/types/class-name-value";

export function cnj(...classes: ClassNameValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/* ALL IN ONE FELL SWOOP */
// export function cnj(
//   ...classes: Array<string | false | null | undefined>
// ): string {
//   return classes.filter(Boolean).join(" ");
// }
