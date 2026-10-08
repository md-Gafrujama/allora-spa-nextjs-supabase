export type Therapist = {
  src: string;
  width: number;
  height: number;
  position: string;
  role: string;
  service: string;
};

export const therapists: Therapist[] = [
  { src: '/images/hero/massage.jpg', width: 1024, height: 853, position: 'center 40%', role: 'Massage Expert', service: 'Relaxing oil massage' },
  { src: '/images/hero/facial.jpg', width: 1024, height: 853, position: 'center 40%', role: 'Facial Specialist', service: 'Cleansing facial care' },
  { src: '/images/hero/wellness.jpg', width: 1152, height: 864, position: 'center 35%', role: 'Wellness Expert', service: 'Head & scalp massage' },
  { src: '/images/hero/glow.jpg', width: 1024, height: 768, position: 'center', role: 'Beauty Specialist', service: 'Glow & beauty care' },
  { src: '/images/hero/scrub.jpg', width: 1024, height: 768, position: 'center', role: 'Body Care Expert', service: 'Body scrub & polish' },
  { src: '/images/hero/spa-therapist.jpg', width: 1152, height: 864, position: 'center 40%', role: 'Spa Therapist', service: 'Foot spa & massage' },
  { src: '/images/hero/aromatherapy.jpg', width: 807, height: 1024, position: 'center 38%', role: 'Aromatherapy Expert', service: 'Aromatic oil therapy' },
];
