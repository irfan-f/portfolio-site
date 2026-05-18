# Portfolio site

Personal site built with **React**, **Vite**, and **Tailwind**, deployed to **Hostinger VPS** at [irfan-f.com](https://irfan-f.com).

## Stack

- React 18, React Router 6 (`BrowserRouter` with nginx SPA fallback)
- TypeScript, Vite 6
- Tailwind CSS 4
- `react-helmet-async` for page metadata
- Variable fonts via Fontsource (Dosis, Libre Franklin, Mulish)

## Run locally

```bash
npm install
cp -r public.example public   # once: icons + minimal static files (public/ is gitignored)
npm run dev
```

`deploy/` and `scripts/` are also gitignored; keep your VPS nginx configs and `scripts/generate-images.mjs` locally (see [public.example/README.md](public.example/README.md)).

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Vite dev server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Serve `dist/` |
| `npm run build:images` | Resize PNG/JPEG in `public/images/`, write WebP/AVIF + responsive variants |
| `npm run lint` / `npm run format` | ESLint / Prettier |
| `npm run test:e2e` | Playwright smoke tests |

## Deploy

Production is on **Hostinger VPS** at [irfan-f.com](https://irfan-f.com). Deploy manually with `npm run build` and rsync; keep VPS/nginx notes in your local `deploy/` directory (gitignored).

## Images

1. Add or replace masters in `public/images/` (or `scripts/sources/`).
2. Run `npm run build:images` to resize (max 1280px wide), generate WebP/AVIF, and update `src/data/image-meta.json`.
3. Keep optimized binaries in local `public/images/` (not committed).

## Content

- Project cards: `src/data/projects.ts`
- About gallery: `src/utils/images.ts`
