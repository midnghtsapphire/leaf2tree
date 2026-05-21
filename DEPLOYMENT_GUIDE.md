# Deployment Guide

## Prerequisites

- Node.js 20+
- npm 10+

## Install dependencies

```bash
cd /home/runner/work/leaf2tree/leaf2tree
npm install
```

## Verify locally

```bash
npm run lint
npm run build
```

The production bundle will be generated in `/home/runner/work/leaf2tree/leaf2tree/dist`.

## Deploy to a static host

Leaf2Tree is a static Vite build, so any static host will work.

### Option A: Netlify

1. Create a new site from the repository.
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist`.
4. Deploy.

### Option B: Vercel

1. Import the repository.
2. Keep the framework preset as `Vite`.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy.

### Option C: GitHub Pages or another static CDN

1. Run `npm run build`.
2. Upload the contents of `dist/` to the host.
3. Configure the host to serve `index.html` for the root route.

## Post-deploy checklist

- Confirm the homepage loads without console errors.
- Confirm the hero, S2M stages, and offers sections render on mobile and desktop.
- Confirm the favicon and page title are correct.
- Re-run `npm run build` after any content or code changes before release.
