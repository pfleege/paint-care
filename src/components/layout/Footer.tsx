// src/components/layout/Footer.tsx

import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import PaintBlob from "../ui/PaintBlob";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-grape/20 text-ink">
      <PaintBlob
        seed={11}
        className="absolute -left-16 -bottom-16 -z-10 w-64 text-tomato/90"
      />
      <PaintBlob
        seed={5}
        className="absolute -right-10 bottom-0 -z-10 w-72 text-grape/80"
      />
      <PaintBlob
        seed={8}
        className="absolute right-1/3 -top-10 -z-10 w-40 text-sun/80"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.6fr_1.4fr_1fr_1fr]">
        <div>
          <Image
            className="absolute top-2 left-2 h-20 w-auto"
            src="/paint-care-logo.png"
            alt="PaintCare logo"
            width={650}
            height={450}
            priority
          />
        </div>
        <div>
          {" "}
          <p className="font-display text-lg">About {site.name}</p>
          <p className="mt-5 max-w-xs">{site.description}</p>
        </div>
        <div>
          <p className="font-display text-lg">Visit us</p>
          <address className="mt-3 not-italic">
            {site.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="mt-2 block">{site.hours}</span>
          </address>
        </div>
        <div>
          <p className="font-display text-lg">Say hello</p>
          <ul className="mt-3 space-y-1">
            <li>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="hover:text-white"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="break-all hover:text-white"
              >
                {site.email}
              </a>
            </li>
            <li>
              <Link href="/programs" className="hover:text-white">
                Our programs
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="flex justify-self-center mx-auto max-w-6xl px-6 pb-4 text-sm">
        © 2026 {site.name}. A fictional showcase project. Photos via Pixabay.
      </p>
    </footer>
  );
}
