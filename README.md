# Brokr Landing Page

Marketing site and waitlist funnel for Brokr.

## Current stack

- React 18 + TypeScript
- Vite for local development and production builds
- React Router for client-side routing
- TanStack Query for app wiring
- Tailwind-based UI primitives in `src/components/ui/`

## Routes

- `/` marketing landing page
- `/waitlist` waitlist form
- `*` fallback 404 page

## Local development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

The Vite dev server runs on `http://localhost:8080`.

## Scripts

- `npm run dev` starts the local development server
- `npm run build` creates a production build
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint
- `npm test` runs the Vitest suite

## Waitlist form

The `/waitlist` page posts directly to Formspree using the hardcoded `FORMSPREE_FORM_ID` in `src/pages/Waitlist.tsx`.
If the submission target changes, update that constant before deploying.
