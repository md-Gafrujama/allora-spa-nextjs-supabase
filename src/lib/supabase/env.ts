/** Real project URL and anon key, or null while `.env` still has the example placeholders. */
export function getSupabasePublicEnv(): { url: string; key: string } | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? '';
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ?? '';
  if (!url || !key) return null;
  if (url.includes('xxxxxxxxxxxx') || key.endsWith('...')) return null;
  return { url, key };
}
