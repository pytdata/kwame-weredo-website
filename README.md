# KWAME WEREKO ENTERPRISE Website

Production-ready foundation for a Next.js + TypeScript FMCG website and e-commerce platform.

## Setup

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate -- --name init
npm run prisma:seed
npm run dev
```

## Included foundation
- Public pages (home, about, products, gift boxes, contact, legal)
- Auth page shells
- Admin dashboard shells
- Prisma schema for users, products, orders, payments, and gift boxes
- Paystack initialize/verify API routes and webhook stub
- Upstash Redis utility
- SEO files: metadata, sitemap, robots
- PWA manifest + icon placeholders
- Theme toggle (light/dark)

## Required environment variables
See `.env.example`.

## TODO (next milestones)
- Complete auth with OTP email delivery and rate limiting
- Implement full cart/checkout/order lifecycle
- Build admin CRUD modules and RBAC guards
- Expand email templates and notification providers
- Add production-quality visuals and content CMS
