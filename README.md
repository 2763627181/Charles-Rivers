# Charles River — Laboratory Mouse Identification & Reference Guide

A modern, bilingual (EN/ES) internal reference tool for laboratory technicians, rebuilt from the original Charles River "Laboratory Mouse Identification & Reference Guide" as a Next.js application. All scientific content (aging characteristics, coat colors, ear ID system, clinical signs, sexing) is sourced from the original guide; only the interface has been redesigned.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/en` (or `/es`, based on a saved preference cookie).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Project structure

```
app/[locale]/            Routes (en | es), see lib/i18n.ts for locale handling
components/layout/        Header, sidebar, mobile nav, breadcrumb, footer, language selector
components/guide/         Cards, grids, explorers, image lightbox, search, health/aging/sexing content
components/ui/            shadcn/ui primitives (Radix-based)
components/home/          Hero + quick access for the landing page
data/                     Bilingual content (aging, coat-colors, health, ear-identification, sexing, reference, navigation)
types/                    Shared TypeScript interfaces
messages/                 UI copy dictionaries (en.ts, es.ts) + lib/get-dictionary.ts
lib/                      i18n helpers, cn() utility, icon map, locale context
public/images/reference/  Cropped image assets, organized by section (+ legacy/ for full original screenshots)
scripts/                  Python scripts used to crop the original screenshots into individual assets (reference only)
```

## Deploying to Vercel

This is a stock Next.js App Router project — push to a Git repo and import it in Vercel, or run `vercel` from the project root. No environment variables are required.

## Content that needs manual validation

- **Handbook PDF**: the "View Handbook" button on `/guide/health/handbook` is intentionally disabled — no PDF source was provided, only the cover image. Wire it up once a source document/link exists.
- **Rat aging Day 12 and Day 14**: the original chart had no characteristic caption for these two rows (photo only); this is preserved as-is rather than inventing text.
- Two source lines flagged with `// TODO: verify source text from original reference` in `data/aging.ts`.
