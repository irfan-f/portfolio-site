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
npm run dev
```

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

Production is on **Hostinger VPS** at [irfan-f.com](https://irfan-f.com). Deploy manually with `npm run build` and rsync (see [deploy/README.md](deploy/README.md) for VPS setup, TLS, and DNS).

## Images

1. Add or replace masters in `public/images/` (or `scripts/sources/`).
2. Run `npm run build:images` to resize (max 1280px wide), generate WebP/AVIF, and update `src/data/image-meta.json`.
3. Commit optimized assets under `public/images/`.

## Content

- Project cards: `src/data/projects.ts`
- About gallery: `src/utils/images.ts`
