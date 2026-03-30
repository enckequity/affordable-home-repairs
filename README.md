# Affordable Home Repairs LLC — Website

Production website for Affordable Home Repairs LLC, a handyman, carpentry, painting, cabinet refinishing, and roof repair company based in Crestview, FL.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating Content

All company information, services, testimonials, and contact details live in a single file:

```
/lib/constants.ts
```

Edit that file, save, commit, and push. The site auto-deploys to Vercel in ~60 seconds.

## Updating Images

Replace files in `/public/images/` or update the Unsplash URLs in the gallery component at `/components/sections/gallery.tsx`.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Framer Motion** (scroll animations)
- **Lucide React** (icons)

No database. No API keys. No environment variables required.

## Deployment

Push to `main` branch on GitHub — Vercel auto-deploys.

## Brand Guide

See `brand-guide.md` in the project root for colors, typography, and voice guidelines.
