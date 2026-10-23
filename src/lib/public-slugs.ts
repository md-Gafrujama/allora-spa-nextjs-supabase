type Row = { from: string; name: string; base: string; aliases?: string[] };

const rows: Row[] = ([
  ['luxury-spa-package-dubai', 'Luxury', '/spa-packages'],
  ['couples-spa-package-dubai', 'Couples', '/spa-packages'],
  ['spa-day-package-dubai', 'Day Spa', '/spa-packages'],
  ['massage-package-dubai', 'Massage Session', '/spa-packages'],
  ['moroccan-bath-package-dubai', 'Moroccan Bath', '/spa-packages'],
  ['spa-gift-voucher-dubai', 'Gift Voucher', '/spa-packages'],
  ['birthday-spa-package-dubai', 'Birthday Celebration', '/spa-packages'],
  ['bridal-spa-package-dubai', 'Bridal Preparation', '/spa-packages'],
  ['ladies-spa-package-dubai', 'Ladies Wellness', '/spa-packages'],
  ['home-spa-dubai', 'Private Residence', '/your-place'],
  ['home-massage-service-dubai', 'Massage', '/your-place', ['massage-visit-dubai']],
  ['hotel-room-spa-service-dubai', 'Hotels', '/your-place', ['hotel-room-dubai']],
  ['apartment-spa-service-dubai', 'Apartment', '/your-place', ['apartment-visit-dubai']],
  ['couples-massage-at-home-dubai', 'Couples Massage', '/your-place'],
  ['home-facial-service-dubai', 'Facial Care', '/your-place'],
  ['home-spa-marina-dubai', 'Dubai Marina', '/your-place'],
  ['home-spa-jumeirah-dubai', 'Jumeirah', '/your-place'],
  ['home-spa-downtown-dubai', 'Downtown Dubai', '/your-place'],
  ['home-spa-business-bay-dubai', 'Business Bay', '/your-place'],
  ['spa-event-services-dubai', 'Private Celebrations', '/event-services'],
  ['spa-party-dubai', 'Spa Party', '/event-services'],
  ['birthday-spa-party-dubai', 'Birthday Party', '/event-services'],
  ['bridal-shower-spa-dubai', 'Bridal Shower', '/event-services'],
  ['hen-party-spa-dubai', 'Hen Party', '/event-services'],
  ['corporate-wellness-spa-dubai', 'Team Wellness', '/event-services'],
  ['office-massage-events-dubai', 'Office Sessions', '/event-services'],
  ['private-spa-events-dubai', 'Private Gathering', '/event-services'],
  ['mobile-spa-for-events-dubai', 'Mobile Spa', '/event-services'],
  ['group-spa-packages-dubai', 'Group Booking', '/event-services'],
  ['chair-massage-dubai', 'Chair Massage', '/corporate'],
  ['back-neck-shoulder-dubai', 'Back, Neck & Shoulder', '/corporate'],
  ['head-scalp-dubai', 'Head & Scalp', '/corporate'],
  ['arm-hand-dubai', 'Arm & Hand', '/corporate'],
  ['seated-relaxation-dubai', 'Seated Relaxation', '/corporate'],
  ['work-stress-dubai', 'Work-Stress Relief', '/corporate'],
  ['thai-massage-dubai', 'Thai Massage', '/massages'],
  ['couple-massage-dubai', 'Couple Massage', '/massages'],
  ['hot-stone-massage-dubai', 'Hot Stone', '/massages'],
  ['jacuzzi-massage-dubai', 'Jacuzzi Massage', '/massages'],
  ['deep-tissue-massage-dubai', 'Deep Tissue', '/massages'],
  ['lymphatic-drainage-dubai', 'Lymphatic Drainage', '/massages'],
  ['cellulite-dubai', 'Cellulite Care', '/deep-tissue'],
  ['medotherapy-dubai', 'Medotherapy', '/deep-tissue'],
] as [string, string, string, string[]?][]).map(([from, name, base, aliases]) => ({ from, name, base, aliases }));

function toSlug(label: string) {
  const base = label.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (!base || base.includes('dubai')) return base;
  return `${base}-dubai`;
}

const resolved = rows.map((row) => ({ ...row, to: toSlug(row.name) }));

function find(slug: string) {
  return resolved.find((row) => row.from === slug || row.to === slug || row.aliases?.includes(slug));
}

export function publicSlug(slug: string) {
  return find(slug)?.to ?? slug;
}

export function displayName(slug: string, fallback = '') {
  return find(slug)?.name || fallback;
}

export function publicPath(slug: string) {
  const hit = find(slug);
  return hit ? `${hit.base}/${hit.to}` : '';
}

const sections = ['spa-packages', 'your-place', 'event-services', 'corporate', 'massages', 'deep-tissue'];

export function legacyRedirects() {
  const seen = new Set<string>();
  const out: { from: string; to: string }[] = [];
  for (const row of resolved) {
    const dest = `${row.base}/${row.to}`.replace(/^\//, '');
    const sources = new Set<string>([row.from, row.to, ...(row.aliases ?? [])]);
    for (const section of sections) {
      for (const slug of [row.from, row.to, ...(row.aliases ?? [])]) sources.add(`${section}/${slug}`);
    }
    for (const from of sources) {
      if (from === dest || seen.has(from)) continue;
      seen.add(from);
      out.push({ from, to: dest });
    }
  }
  return out;
}
