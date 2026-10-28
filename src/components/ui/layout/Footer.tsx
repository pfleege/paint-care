// src/components/layout/Footer.tsx

import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-grape/20 text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-medium">{site.name}</p>
          <p className="mt-3 max-w-xs">{site.tagline}</p>
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
      <p className="mx-auto max-w-6xl px-6 pb-8 text-sm">
        © 2026 {site.name}. A fictional showcase project. Photos via Pixabay.
      </p>
    </footer>
  );
}
