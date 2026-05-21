# Leaf2Tree

Leaf2Tree is a launch-focused S2M (ship to market) website for turning rough product ideas into a clear, market-facing surface.

## What changed

This repository previously contained only `/home/runner/work/leaf2tree/leaf2tree/AGENTS.md`, so there was nothing for an automated site-processing flow to build or publish. The fix was to scaffold a real React + TypeScript + Vite application, replace the generic starter content with Leaf2Tree branding and launch messaging, and add the missing operational documentation needed to ship.

## Features

- Branded single-page Leaf2Tree marketing site
- Responsive layout focused on S2M offers and process
- Production build via Vite
- Supporting launch documentation following revvel-style ship-to-market standards
- Repository-level S2M protocol so future agents treat `S2M` as a full single-iteration ship request
- Built-in `validate.py` completeness check for required S2M files and content markers

## Quick start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Linting

```bash
npm run lint
```

## Completeness validation

```bash
python3 validate.py
```

This verifies that the repo still contains the required S2M surface area: the website, the revvel-style docs, and the in-repo protocol that tells future agents how to interpret `S2M`.

## Project structure

```text
/home/runner/work/leaf2tree/leaf2tree/
├── public/                # Static assets including favicon
├── src/                   # React application
├── BRAND_GUIDELINES.md    # Messaging and visual direction
├── CHANGELOG.md           # Release history
├── DEPLOYMENT_GUIDE.md    # Deployment instructions
├── GO_TO_MARKET.md        # Market research and launch direction
├── SECURITY.md            # Security posture and reporting guidance
└── README.md
```

## Stack

- React 19
- TypeScript 6
- Vite 8
- ESLint

## Scripts

- `npm run dev` — local development server
- `npm run build` — type-check and produce production assets in `dist/`
- `npm run preview` — preview the production bundle
- `npm run lint` — lint the codebase
- `python3 validate.py` / `npm run validate` — verify S2M completeness requirements
