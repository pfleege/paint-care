// root/next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  /* config options here */
  images: {
    // Pixabay CDN – the only remote image host used by the site.
    remotePatterns: [
      { protocol: "https", hostname: "cdn.pixabay.com", pathname: "/photo/**" },
    ],
    formats: ["image/avif", "image/webp"],
  },

  /* Turbopack settings */
  // turbopack: {
  //   rules: {
  //     "*.css": {
  //       loaders: ["@tailwindcss/turbopack"],
  //       as: "*.css",
  //     },
  //   },
  // },
};

export default nextConfig;
