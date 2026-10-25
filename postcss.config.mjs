// root/postcss.config.mjs
/**
 * Tailwind CSS v4 runs as a PostCSS plugin. Vendor prefixing and
 * `@import` inlining are built into it, so no extra plugins are needed.
 */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
