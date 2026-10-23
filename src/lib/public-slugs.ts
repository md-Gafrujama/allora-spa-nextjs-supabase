const labels: Record<string, string> = {
  'luxury-spa-package-dubai': 'Luxury',
  'couples-spa-package-dubai': 'Couples',
  'spa-day-package-dubai': 'Day Spa',
  'massage-package-dubai': 'Massage Session',
  'moroccan-bath-package-dubai': 'Moroccan Bath',
  'spa-gift-voucher-dubai': 'Gift Voucher',
  'birthday-spa-package-dubai': 'Birthday Celebration',
  'bridal-spa-package-dubai': 'Bridal Preparation',
  'ladies-spa-package-dubai': 'Ladies Wellness',
  'home-spa-dubai': 'Private Residence',
  'home-massage-service-dubai': 'Massage Visit',
  'hotel-room-spa-service-dubai': 'Hotel Room',
  'apartment-spa-service-dubai': 'Apartment Visit',
  'couples-massage-at-home-dubai': 'Couples Massage',
  'home-facial-service-dubai': 'Facial Care',
  'home-spa-marina-dubai': 'Dubai Marina',
  'home-spa-jumeirah-dubai': 'Jumeirah',
  'home-spa-downtown-dubai': 'Downtown Dubai',
  'home-spa-business-bay-dubai': 'Business Bay',
  'spa-event-services-dubai': 'Private Celebrations',
  'spa-party-dubai': 'Spa Party',
  'birthday-spa-party-dubai': 'Birthday Party',
  'bridal-shower-spa-dubai': 'Bridal Shower',
  'hen-party-spa-dubai': 'Hen Party',
  'corporate-wellness-spa-dubai': 'Team Wellness',
  'office-massage-events-dubai': 'Office Sessions',
  'private-spa-events-dubai': 'Private Gathering',
  'mobile-spa-for-events-dubai': 'Mobile Spa',
  'group-spa-packages-dubai': 'Group Booking',
  'chair-massage-dubai': 'Chair Massage',
  'back-neck-shoulder-dubai': 'Back, Neck & Shoulder',
  'head-scalp-dubai': 'Head & Scalp',
  'arm-hand-dubai': 'Arm & Hand',
  'seated-relaxation-dubai': 'Seated Relaxation',
  'work-stress-dubai': 'Work-Stress Relief',
  'thai-massage-dubai': 'Thai Massage',
  'couple-massage-dubai': 'Couple Massage',
  'hot-stone-massage-dubai': 'Hot Stone',
  'jacuzzi-massage-dubai': 'Jacuzzi Massage',
  'deep-tissue-massage-dubai': 'Deep Tissue',
  'lymphatic-drainage-dubai': 'Lymphatic Drainage',
  'cellulite-dubai': 'Cellulite Care',
  'medotherapy-dubai': 'Medotherapy',
};

function toSlug(label: string) {
  const base = label.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (!base || base.includes('dubai')) return base;
  return `${base}-dubai`;
}

const byPublic = new Map(Object.entries(labels).map(([, name]) => [toSlug(name), name]));

export function publicSlug(slug: string) {
  const label = labels[slug];
  return label ? toSlug(label) : slug;
}

export function displayName(slug: string, fallback = '') {
  return labels[slug] || byPublic.get(slug) || byPublic.get(publicSlug(slug)) || fallback;
}

export function legacyRedirects() {
  return Object.entries(labels)
    .map(([from, name]) => ({ from, to: toSlug(name) }))
    .filter((row) => row.from !== row.to);
}
