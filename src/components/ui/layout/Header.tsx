// src/components/layout/Header.tsx

import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="relative h-20 mx-auto flex max-w-6xl items-center justify-between rounded-full bg-chalk py-2 pl-5 pr-2 shadow-[0_10px_30px_-14px_rgba(42,33,80,0.35)] backdrop-blur-md">
        <div className="h-full w-1/3">
          <Image
            className="absolute top-0 left-10 h-20 w-auto"
            src="/paint-care-logo.png"
            alt="PaintCare logo"
            width={650}
            height={450}
            priority
          />
        </div>
        <div className="flex w-2/3 justify-between">
          <nav aria-label="Main">
            <ul className="flex items-center gap-1">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-full px-5 py-2 font-display text-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button href="/contact" size="sm" className="inline-block mr-10">
            Book a visit
          </Button>
        </div>
      </div>
    </header>
  );
}
