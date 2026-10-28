// src/data/site.ts

export const site = {
  name: "PaintCare",
  business: "Daycare Center",
  tagline: "A private kindergarten where feelings come first.",
  description:
    "PaintCare is a small, private kindergarten (fictional showcase) built around play, curiosity and every child's well-being.",
  address: ["Värikatu 5", "00100 Helsinki"],
  phone: "+358 40 123 4567",
  email: "hello@paintbox-kindergarten.example",
  hours: "Mon–Fri, 7:30–16:30",
  nav: [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
