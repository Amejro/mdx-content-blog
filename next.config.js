const { withContentlayer } = require ('next-contentlayer')
/** @type {import('next').NextConfig} */


const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Twitter Profile Picture
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = withContentlayer(nextConfig)
