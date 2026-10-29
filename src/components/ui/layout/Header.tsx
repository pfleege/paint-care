// src/components/layout/Header.tsx

"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import Button from "@/components/ui/Button";
// import { cnj } from "@/utils/class-name-joiner";
import { AnimatePresence, motion } from "motion/react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
        <div className="relative flex w-2/3 justify-end md:justify-between">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {site.nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className="relative block rounded-full px-5 py-2 font-display text-lg"
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-blob"
                          className="absolute inset-0 -z-10 rounded-full bg-sun shadow"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* OPEN/CLOSE HAMBURGER MENU */}
          <button
            type="button"
            className="mr-4 rounded-full bg-sun shadow-black shadow-md px-4.5 py-2.5 font-display text-base text-ink md:hidden hover:cursor-pointer"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "X" : "Menu"}
          </button>

          <AnimatePresence>
            {open && (
              <motion.nav
                id="mobile-nav"
                aria-label="Mobile"
                initial={{ opacity: 0, x: -150, y: -12, scale: 0.97 }}
                animate={{ opacity: 1, x: -150, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.97 }}
                className="absolute -top-5 right-18 mx-auto mt-2 max-w-6xl z-10 rounded-4xl bg-chalk p-4 shadow-xl md:hidden"
              >
                <ul className="grid gap-1">
                  {site.nav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={
                          pathname === item.href ? "page" : undefined
                        }
                        className="block rounded-full px-5 py-3 font-display z-20 text-xl aria-[current=page]:bg-mint"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>

          {/* BOOK A VISIT BUTTON */}
          <div className="w-fit">
            <Button
              href="/contact"
              size="sm"
              className="inline-block shadow-black shadow-md mr-5 md:mr-10"
            >
              Book a visit
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
