/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'cdn.worldvectorlogo.com', 'images.pexels.com', 'images.rawpixel.com', 'upload.wikimedia.org'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
    critters: true,
  },
}

module.exports = nextConfig