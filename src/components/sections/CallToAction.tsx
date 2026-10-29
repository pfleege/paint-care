// src/components/sections/BusinessValuesSection.tsx

import PaintBlob from "../ui/PaintBlob";
import Button from "../ui/Button";

type Props = { title?: string; text?: string; label?: string; href?: string };

export default function CallToAction({
  title = "Come and meet us.",
  text = "Visits take about an hour. Bring your child, your questions and a cup of coffee is on us.",
  label = "Book a visit",
  href = "/contact",
}: Props) {
  return (
    <section className="px-4 pb-24">
      <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-tomato px-8 py-20 text-center md:py-28">
        <PaintBlob
          seed={21}
          className="absolute -left-12 -top-12 -z-10 w-56 text-sun"
        />
        <PaintBlob
          seed={6}
          className="absolute -bottom-16 -right-10 -z-10 w-72 text-bubblegum"
        />
        <PaintBlob
          seed={17}
          className="absolute bottom-6 left-1/4 -z-10 w-20 text-grape/80"
        />
        <h2 className="text-5xl font-medium md:text-7xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-md text-lg">{text}</p>
        <Button href={href} size="sm" className="mt-9">
          {label}
        </Button>
      </div>
    </section>
  );
}
