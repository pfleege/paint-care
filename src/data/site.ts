// src/data/site.ts

export const site = {
  name: "PaintCare",
  business: "Daycare Center",
  tagline: "A private kindergarten where feelings come first.",
  description:
    "PaintCare is a small, private kindergarten (fictional showcase) built around play, curiosity and every child's well-being.",
  address: ["Värikatu 5", "00100 Helsinki"],
  phone: "+358 40 123 4567",
  email: "hello@paintcare-daycare.example",
  hours: "Mon–Fri, 7:30–16:30",
  nav: [
    { href: "/testpage/home", label: "Home" },
    { href: "/testpage/programs", label: "Programs" },
    { href: "testpage/contact", label: "Contact" },
    // { href: "/", label: "Home" },
    // { href: "/programs", label: "Programs" },
    // { href: "/contact", label: "Contact" },
  ],
} as const;
