# Grand Valley Can Blasters — Marketing Site

Single-page Astro site for Grand Valley Can Blasters (trash & recycle bin cleaning, Grand Junction · Fruita · Palisade, CO). Static output, mobile-first, SEO-baked.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static build → ./dist
npm run preview    # preview the built site
```

Node 18+ required. (Tested on Node 22.)

## Where to edit content

All editable copy lives in **one file**: [`src/data/site.ts`](src/data/site.ts).

| What you want to change          | What to edit in `site.ts` |
| -------------------------------- | ------------------------- |
| Business phone / email / hours   | `site.phone`, `site.email`, `site.hours` |
| Address (used in JSON-LD)        | `site.address` |
| Nav links                        | `nav` array |
| Service cards                    | `services` array |
| "How It Works" steps             | `steps` array |
| Trust-bar chips                  | `trustChips` array |
| Service-area city blurbs         | `serviceAreas` array |
| Pricing tier cards               | `pricingTiers` array |
| FAQ items (also drives schema)   | `faqs` array |
| Social links                     | `site.social` |

Page section order is in [`src/pages/index.astro`](src/pages/index.astro).

## Where to edit styles / brand

- **Colors & fonts** → [`tailwind.config.mjs`](tailwind.config.mjs) (`brand-blue`, `brand-navy`, `brand-green`, `brand-mint`, `brand-sky`, `brand-sand`, `ink`).
- **Base typography & utility classes** (`btn-primary`, `card`, etc.) → [`src/styles/global.css`](src/styles/global.css).
- **Section layouts** → individual files in [`src/components/`](src/components/).

## Brand assets

Drop production photos into [`public/images/`](public/) and reference them from components. The logo lives at `public/logo.png`; replace with a tighter export anytime — keep the filename.

## Placeholders to swap before launch

Grep the repo for either marker to find every unconfirmed value:

```bash
grep -rn "⚠️" src
grep -rn "TODO" src
```

Known unknowns:

- **NAP** — phone, email, full street address (`src/data/site.ts`)
- **Hours** — `site.hours` + `site.openingHoursSchema`
- **Pricing** — all `price` fields in `services` and `pricingTiers`
- **Wash temperature** — placeholder in `steps[2].body`
- **Social URLs** — `site.social`
- **Form backend** — `<form action="#">` in [`src/components/BookingCTA.astro`](src/components/BookingCTA.astro). Pick one (Vercel Forms, Formspree, CRM webhook) at deploy time and update the `action`.

## SEO

- Title, meta, Open Graph, Twitter, canonical: [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro)
- JSON-LD `LocalBusiness` (HomeAndConstructionBusiness) and `FAQPage` schemas are generated in the same layout from `src/data/site.ts`.
- `robots.txt` and the sitemap are generated automatically — `site` URL is set in [`astro.config.mjs`](astro.config.mjs).

## Deploy

Out-of-scope for this draft. Recommended path: push to GitHub → import into Vercel → connect `grandvalleycanblasters.com`. No env vars required for the static build.
