// src/app/page.tsx

import Image from "next/image";
import { getDaycareGroups } from "@/db/queries/daycare-groups";

export default async function Home() {
  const groups = await getDaycareGroups();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="h-100 w-auto"
          src="/paint-care-logo.png"
          alt="PaintCare logo"
          width={650}
          height={450}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            PaintCare Daycare Center
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Where every child paints their own day.
          </p>
        </div>
        <div className="p-10">
          <ul className="mt-6">
            {groups.map((group) => (
              <li key={group.id}>
                {group.name} ({group.ages})
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
