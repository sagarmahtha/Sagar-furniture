# Sagar Furniture — website starter

A responsive Next.js App Router + TypeScript + Tailwind CSS v4 website for a furniture maker. The design is a client-ready demo and uses sample furniture imagery.

## Contact/location currently configured
- Shop name: Sagar Furniture
- Phone/WhatsApp: 9035007196
- Location: Duba, Jharkhand
- PIN: 814141
- Google Maps Plus Code: FWCV+7GW

## Run locally
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy
Push this project to GitHub and import it into Vercel. No database or environment variables are required for this first static/business-site phase.

## Before selling to a client
1. Replace shop name, phone, address, PIN and Plus Code in `app/page.tsx`.
2. Replace sample images with client-approved images; sample images are inspiration only.
3. Verify the exact map pin and PIN code with the client.
4. Verify that the client owns/controls the contact number used for WhatsApp enquiries.

## Future phase
Customer login, order tracking, booking and admin management are intentionally not included yet. Add these when needed; Supabase can be integrated at that stage without adding a database dependency to this static first version.
