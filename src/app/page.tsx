// src/app/page.tsx

// import Image from "next/image";
import { getDaycareGroups } from "@/db/queries/daycare-groups";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export default async function Home() {
  const groups = await getDaycareGroups();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <SectionHeading title={site.business} />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Where every child paints their own day.
          </p>
        </div>
        <div className="py-10">
          <ul className="mt-6 dark:text-bubblegum text-grape">
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
