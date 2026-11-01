// src/components/sections/PlaygroundSection.tsx

import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";

const PhysicsPlayground = dynamic(
  () => import("@/components/effects/PhysicsCanvas"),
);

export default function PlaygroundSection() {
  return (
    <section className="px-4 py-12 md:py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-sky/40 shadow-xl text-ink">
        <div className="relative z-10 px-8 pt-14 md:px-16 md:pt-20">
          <SectionHeading
            title="Play is our favourite subject"
            underlineClassName="text-tomato"
          >
            <span className="text-ink/85">
              Learning sticks when it feels like a game. Grab a block and see
              for yourself.
            </span>
          </SectionHeading>
        </div>
        <PhysicsPlayground className="-mt-6 h-112 md:h-120" />
      </div>
    </section>
  );
}
