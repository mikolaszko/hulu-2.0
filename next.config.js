/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['flyclipart.com', 'image.tmdb.org'],
  },
};

module.exports = nextConfig;
