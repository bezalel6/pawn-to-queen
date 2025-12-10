// @ts-nocheck
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  // Removed basePath and assetPrefix for custom domain (pawntoqueen.cc)
  // If deploying without custom domain, set basePath: "/pawn-to-queen"

  /**
   * i18n is not compatible with static export (output: "export")
   * Commented out for GitHub Pages deployment
   */
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
};

export default config;