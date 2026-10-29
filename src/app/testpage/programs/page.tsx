// src/app/testpage/program/page.tsx

import { getDaycareGroups } from "@/db/queries/daycare-groups";
import SectionHeading from "@/components/ui/SectionHeading";
import CdnImage from "@/components/ui/CdnImage";
import Header from "@/components/ui/layout/Header";
import Footer from "@/components/ui/layout/Footer";

export default async function TestProgramPage() {
  const groups = await getDaycareGroups();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <SectionHeading
          title="Our Daycare Groups:"
          className="dark:text-mint text-grape"
          underlineClassName="dark:text-sun text-tomato"
        />
        <div className="relative h-64 w-64 overflow-hidden rounded-full">
          <CdnImage
            path="2025/09/05/19/17/monster-9817935_1280.jpg"
            alt="Cute monster"
            sizes="16rem"
          />
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
      <Footer />
    </div>
  );
}
