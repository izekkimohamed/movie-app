/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  basUrl: "/",
  images: {
    domains: ["image.tmdb.org", "themoviedb.org", "via.placeholder.com"],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
});
