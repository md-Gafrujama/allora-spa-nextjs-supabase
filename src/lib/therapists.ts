export type Therapist = {
  src: string;
  width: number;
  height: number;
  position: string;
  role: string;
  service: string;
};

export const therapists: Therapist[] = [
  { src: '/images/hero/role-1.jpg', width: 1024, height: 1024, position: 'center', role: 'Massage Expert', service: 'Deep tissue massage' },
  { src: '/images/hero/role-2.jpg', width: 1024, height: 1024, position: 'center', role: 'Facial Specialist', service: 'Cleansing facial care' },
  { src: '/images/hero/role-3m.jpg', width: 1024, height: 1024, position: 'center', role: 'Wellness Expert', service: 'Head & scalp massage' },
  { src: '/images/hero/role-4h.jpg', width: 1024, height: 1024, position: 'center', role: 'Beauty Specialist', service: 'Glow & beauty care' },
  { src: '/images/hero/role-5m.jpg', width: 1024, height: 1024, position: 'center', role: 'Body Care Expert', service: 'Body scrub & polish' },
  { src: '/images/hero/role-6m.jpg', width: 1024, height: 1024, position: 'center', role: 'Spa Therapist', service: 'Foot spa & massage' },
  { src: '/images/hero/role-7m.jpg', width: 1024, height: 1024, position: 'center', role: 'Aromatherapy Expert', service: 'Aromatic oil therapy' },
];
