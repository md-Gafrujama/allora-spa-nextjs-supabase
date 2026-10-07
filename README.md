# ALLORA Spa & Wellness — Next.js + Supabase

Production-oriented website starter for ALLORA Spa & Wellness, built around the supplied visual references.

## Stack
- Next.js 15 + React 19 + TypeScript
- Tailwind CSS v4
- Supabase Auth + Postgres + RLS
- Lucide icons
- Local optimized assets under `public/images`
- WhatsApp-first booking flow

## Included website
- Numbered navbar: `1. Home`, `2. Spa Package`, `3. Your Place`, `4. Event Service`, `About Us`, `Contact Us`
- Desktop mega dropdowns with every supplied service link
- Mobile navigation with all service links
- Home page matching the supplied ALLORA visual direction
- About page matching the supplied layout direction
- Compact Contact page with form, WhatsApp, service areas and local map image
- 9 Spa Package detail routes
- 10 Your Place detail routes
- 10 Event Service detail routes
- Supabase contact-message storage
- Admin/login foundation from the original starter
- SEO metadata, robots and full dynamic sitemap
- Local image assets so pages do not depend on external image URLs

## Route catalogue
### Spa Package
- `/spa-packages/luxury-spa-package-dubai/`
- `/spa-packages/couples-spa-package-dubai/`
- `/spa-packages/spa-day-package-dubai/`
- `/spa-packages/massage-package-dubai/`
- `/spa-packages/moroccan-bath-package-dubai/`
- `/spa-packages/spa-gift-voucher-dubai/`
- `/spa-packages/birthday-spa-package-dubai/`
- `/spa-packages/bridal-spa-package-dubai/`
- `/spa-packages/ladies-spa-package-dubai/`

### Your Place
- `/your-place/home-spa-dubai/`
- `/your-place/home-massage-service-dubai/`
- `/your-place/hotel-room-spa-service-dubai/`
- `/your-place/apartment-spa-service-dubai/`
- `/your-place/couples-massage-at-home-dubai/`
- `/your-place/home-facial-service-dubai/`
- `/your-place/home-spa-dubai-marina/`
- `/your-place/home-spa-jumeirah/`
- `/your-place/home-spa-downtown-dubai/`
- `/your-place/home-spa-business-bay/`

### Event Service
- `/event-services/spa-event-services-dubai/`
- `/event-services/spa-party-dubai/`
- `/event-services/birthday-spa-party-dubai/`
- `/event-services/bridal-shower-spa-dubai/`
- `/event-services/hen-party-spa-dubai/`
- `/event-services/corporate-wellness-spa-dubai/`
- `/event-services/office-massage-events-dubai/`
- `/event-services/private-spa-events-dubai/`
- `/event-services/mobile-spa-for-events-dubai/`
- `/event-services/group-spa-packages-dubai/`

## Images
All required visual assets are stored locally in `public/images/` and referenced with Next.js `Image`.
- `public/images/services/` — hero, spa, event, contact and about assets
- `public/images/team/` — 7 therapist portraits + 4 service card images
- `public/images/ui/` — supplied full-page reference screenshots for design reference only

## Environment
Copy `.env.example` to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=971501234567
```

## Supabase
1. Create a Supabase project.
2. Run `supabase/schema.sql` in SQL Editor.
3. Run `supabase/seed-services.sql` to populate the full 29-service catalogue.
4. Create an admin user in Supabase Auth.
5. Add a matching row in `profiles` with `role = 'admin'`.

## Run
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Production
```bash
npm run build
npm start
```

For Vercel, add the same environment variables in Project Settings. Keep Supabase keys in environment variables and never commit `.env.local`.
