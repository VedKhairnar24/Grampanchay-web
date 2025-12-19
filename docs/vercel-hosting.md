# Vercel Hosting Guide

This file contains step-by-step answers for creating the project on Vercel and configuring environment variables for this repository.

## New Project — Import from GitHub
- Git provider: GitHub
- Repository: `VedKhairnar24/Grampanchay-web`
- Branch: `main`

## Project Settings (answers filled in)
- Team: `Vercel Team` (or select your target team)
- Project visibility: `ved khairnar's projects` (your selection)
- Plan: `Hobby` (or as selected)
- Project Name: `grampanchay-web-1t3i`
- Framework Preset: `Vite`
- Root Directory: `./`
- Build Command: `npm run build` (or `vite build`)
- Output Directory: `dist`
 - Output Directory: `dist/public` (Vite build places the static client at `dist/public` in this repo)
- Install Command: choose one: `yarn install`, `pnpm install`, `npm install`, or `bun install`

## Environment Variables (set in Vercel dashboard)
Add these under Settings -> Environment Variables (Production).

- `EXAMPLE_NAME` = `I9JU23NF394R6HH`
- `DATABASE_URL` = `mongodb+srv://admin:ved$123@vedkhairnar.oap3ls2.mongodb.net/`  
  (Note: do not commit credentials; use the Vercel dashboard or the CLI to set this)
- `SESSION_SECRET` = `b33fa8d4fff8f59f07ff6094e2207efe`
- `PORT` = `5000` (usually not required on Vercel; left for local dev or if using a custom server)

To set variables using the Vercel CLI:

```bash
vercel env add EXAMPLE_NAME production
vercel env add DATABASE_URL production
vercel env add SESSION_SECRET production
vercel env add PORT production
```

## Notes & Recommendations
- `vercel.json` already includes an SPA rewrite to serve the client routes:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

- If you are deploying only the static client built to `dist`, the above settings are sufficient.
- If you ran into an error on Vercel where the build appears to stop during `transforming...` or the deploy fails, try the following:
  - Set the **Output Directory** in the Vercel project settings to `dist/public`.
  - Keep the **Build Command** as `npm run build` (builds the client).
  - Vercel's static deploy will then pick up `dist/public` and serve the SPA.
  - This repository is client-only; for server-side API endpoints deploy them separately or add serverless functions under `api/`.
  - If your build emits very large JS chunks (see `vite` warnings about >500 kB), consider code-splitting or manual chunking to reduce initial bundle sizes and improve performance.

## After Import
1. Confirm the build settings match above in the Vercel UI.
2. Add the environment variables in the Vercel dashboard (Production & Preview as needed).
3. Deploy and check the Project Deployments page for build logs and environment usage.

If you'd like, I can also set up a Vercel Git integration step-by-step or convert the Express server into serverless endpoints—tell me which you'd prefer.
