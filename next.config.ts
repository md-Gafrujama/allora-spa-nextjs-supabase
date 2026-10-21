import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: { formats: ['image/avif', 'image/webp'], remotePatterns: [{ protocol: 'https', hostname: '**' }] },
  async redirects() {
    return [
      { source: '/spa-packages/:slug', destination: '/:slug', permanent: false },
      { source: '/your-place/:slug', destination: '/:slug', permanent: false },
      { source: '/event-services/:slug', destination: '/:slug', permanent: false },
      { source: '/corporate/:slug', destination: '/:slug', permanent: false },
      { source: '/massages/:slug', destination: '/:slug', permanent: false },
      { source: '/deep-tissue/:slug', destination: '/:slug', permanent: false },
    ];
  },
};
export default nextConfig;
