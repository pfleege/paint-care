// root/next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  /* config options here */

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
