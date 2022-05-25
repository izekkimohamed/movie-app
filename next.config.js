/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basUrl: "/",
  images: {
    domains: ["image.tmdb.org", "themoviedb.org", "via.placeholder.com"],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};

module.exports = nextConfig;
