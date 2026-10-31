// src/app/testpage/program/page.tsx

import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import { getDaycareGroups } from "@/db/queries/daycare-groups";
import { getDaylyRythm } from "@/db/queries/daily-rythm";
import ProgramList from "@/components/sections/ProgramList";
import DailyRhythm from "@/components/sections/DailyRhythm";

export default async function ProgramsPage() {
  const programs = await getDaycareGroups();
  const rhythm = await getDaylyRythm();
  return (
    <>
      <PageIntro title="A place for every age." accent="mint">
        Four small groups, each with its own rhythm, room and set of favourite
        games.
      </PageIntro>
      <ProgramList programs={programs} />
      <DailyRhythm steps={rhythm} />
    </>
  );
}
