// src/app/testpage/program/page.tsx

import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import { getDaycareGroups } from "@/db/queries/daycare-groups";
import ProgramList from "@/components/sections/ProgramList";

export default async function ProgramsPage() {
  const programs = await getDaycareGroups();
  return (
    <>
      <PageIntro title="A place for every age." accent="mint">
        Four small groups, each with its own rhythm, room and set of favourite
        games.
      </PageIntro>
      <ProgramList programs={programs} />
    </>
  );
}
