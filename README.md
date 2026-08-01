# Worldwide Supply 28

Premium B2B wholesale website for Worldwide Supply 28, a Spain-based international distributor focused on luxury wholesale, travel retail, FMCG, global sourcing, logistics, and long-term business partnerships.

The site intentionally avoids e-commerce patterns: no cart, checkout, prices, sale badges, wishlist, or product detail purchase flows.

## Getting Started

```bash
npm run dev
```

Useful checks:

```bash
npm run lint
npm run type-check
npm run build
```

## Pages

- Home
- About
- Product Categories
- Services
- Global Distribution
- Partners
- Contact
- Privacy Policy
- Terms

## Backend Services

The inquiry endpoint is implemented at `src/app/api/inquiries/route.ts`.

Configured integrations:

- MongoDB via `DATABASE_URL` for lead storage
- Resend via `RESEND_API_KEY` for admin and acknowledgement emails
- In-memory rate limiting and honeypot field
- Zod server-side validation

## Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=https://www.worldwidesupply28.com
DATABASE_URL=
RESEND_API_KEY=
SENDGRID_API_KEY=
ADMIN_EMAIL=trading@worldwidesupply28.com
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
```

## Deployment

1. Add the environment variables in Vercel.
2. Deploy the Next.js app.
3. Submit `/sitemap.xml` in Google Search Console.
4. Test the inquiry form with database and email variables enabled.
5. Complete `LAUNCH_CHECKLIST.md`.
