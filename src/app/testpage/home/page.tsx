// src/app/testpage/home/page.tsx

import { getDaycareGroups } from "@/db/queries/daycare-groups";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import PaintBlob from "@/components/ui/PaintBlob";
import Button from "@/components/ui/Button";
import CdnImage from "@/components/ui/CdnImage";

export default async function TestHomePage() {
  const groups = await getDaycareGroups();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <SectionHeading
          title={site.name}
          className="dark:text-bubblegum text-grape"
          underlineClassName="dark:text-sun text-tomato"
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A daycare center where every child paints their own day.
          </p>
        </div>
        <div className="relative h-64 w-64 overflow-hidden rounded-full">
          <CdnImage
            path="2024/01/14/09/58/ai-generated-8507502_1280.jpg"
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
