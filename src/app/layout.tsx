// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import "@fontsource/gaegu";
import "@fontsource/gloria-hallelujah";
import "./globals.css";
import { site } from "@/data/site";
import Header from "@/components/ui/layout/Header";
import Footer from "@/components/ui/layout/Footer";

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
