import type { NextConfig } from 'next';
import { legacyRedirects } from './src/lib/public-slugs';


const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: { formats: ['image/avif', 'image/webp'], remotePatterns: [{ protocol: 'https', hostname: '**' }] },
  async redirects() {
    // Old public slugs redirect into the section URL.
    return legacyRedirects().map(({ from, to }) => ({
      source: `/${from}`,
      destination: `/${to}`,
      permanent: false,
    }));
  },
};
export default nextConfig;
