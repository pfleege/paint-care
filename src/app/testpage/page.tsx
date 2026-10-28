// src/app/testpage/page.tsx

// src/app/page.tsx

// import Image from "next/image";
import { getDaycareGroups } from "@/db/queries/daycare-groups";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import PaintBlob from "@/components/ui/PaintBlob";
import Button from "@/components/ui/Button";
import CdnImage from "@/components/ui/CdnImage";

export default async function TestPage() {
  const groups = await getDaycareGroups();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <SectionHeading
          title={site.business}
          underlineClassName="dark:text-sun text-tomato"
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Where every child paints their own day.
          </p>
        </div>
        {/* <div className="py-10">
          <ul className="mt-6 dark:text-bubblegum text-grape">
            {groups.map((group) => (
              <li key={group.id}>
                {group.name} ({group.ages})
              </li>
            ))}
          </ul>
        </div> */}
        <div className="relative h-64 w-64 overflow-hidden rounded-full">
          <CdnImage
            path="2025/10/21/18/31/pink-monster-9908120_12800.png"
            alt="Cute monster"
            sizes="16rem"
          />
        </div>

        <div className="flex flex-wrap gap-8 p-10">
          <div className="relative animate-morph size-35 bg-sky">
            <PaintBlob
              seed={4}
              className="absolute top-0 right-0 animate-drift w-40 text-grape"
            />
          </div>
          <PaintBlob seed={10} className="w-35 text-tomato" />
          <PaintBlob seed={5} className="w-20 text-mint" />
          <PaintBlob seed={2} className="w-50 text-sky" />
        </div>
        <Button size="sm" href="/contact">
          Book a visit
        </Button>
        <Button tone="chalk" size="md">
          Click me
        </Button>
      </main>
    </div>
  );
}
