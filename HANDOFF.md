# Handoff — Affordable Home Repairs LLC Website

## What Was Built

A complete, production-ready marketing website for Affordable Home Repairs LLC featuring:

- Full-viewport hero with animated stats and CTAs
- 8 service cards with Cabinet Refinishing highlighted as specialty
- About section telling Andy's 27-year story
- 5 realistic customer testimonials
- Filterable image gallery with lightbox
- 8-question FAQ accordion
- Contact section with form, map, and service area chips
- Service areas section covering 20+ Florida Panhandle communities
- Sticky header with mobile menu
- Full footer with contact info, hours, and service areas
- 404 page with brand styling
- JSON-LD structured data for local business SEO
- FAQPage schema-ready content
- Responsive design (mobile-first, tested at 375px and 1440px)

## Where It Lives

- **Live URL**: https://affordable-home-repairs.vercel.app (after deployment)
- **GitHub**: https://github.com/dakotaenck/affordable-home-repairs

## How to Update Content

Open `/lib/constants.ts` — all company info, services, testimonials, FAQ answers, and contact details are in this single file. Edit, save, commit, push. Auto-deploys in ~60 seconds.

## How to Update Images

Replace Unsplash URLs in `/components/sections/gallery.tsx` with real project photos. For best results, use images at 600px width minimum.

## How to Add a Custom Domain

1. Go to vercel.com → Your Project → Settings → Domains
2. Click "Add Domain"
3. Enter your domain name
4. Update your DNS as instructed by Vercel

## How to Add Google Analytics

1. Open `/app/layout.tsx`
2. Find the commented-out GA4 section
3. Replace `GA_MEASUREMENT_ID` with your actual GA4 measurement ID
4. Uncomment the two `<script>` blocks
5. Commit and push

## Brand Guide

See `brand-guide.md` for colors, typography, and voice guidelines.

## SEO Documents

- `competitor-analysis.md` — Local competitor research
- `seo-keyword-strategy.md` — Target keywords and content strategy

## No API Keys Required

This site has zero environment variables and zero external service dependencies. It runs entirely on static generation with client-side interactions.
