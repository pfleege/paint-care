// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import "@fontsource/gaegu";
import "@fontsource/gloria-hallelujah";
import "./globals.css";
import { site } from "@/data/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/layout/Providers";

export const metadata: Metadata = {
  title: {
    default: `${site.name} – ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#FFFCF6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="fixed left-4 top-4 z-70 -translate-y-24 rounded-full bg-ink px-5 py-2 text-chalk focus:translate-y-0"
        >
          Skip to content
        </a>
        <Providers>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
