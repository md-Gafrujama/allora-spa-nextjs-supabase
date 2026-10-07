export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '');
  const isLocal = !configured || configured.includes('localhost') || configured.includes('127.0.0.1');
  const vercelHost = (process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || '')
    .trim()
    .replace(/^https?:\/\//, '')
    .replace(/\/$/, '');
  if (isLocal && vercelHost) return `https://${vercelHost}`;
  return configured || 'http://localhost:3000';
}
