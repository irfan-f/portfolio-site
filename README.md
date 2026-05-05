# Portfolio site

Personal site built to stay sharp with **React**, **Vite**, and **GitHub Pages**, and to ship small experiments in the open.

**Live:** [irfan-f.com](https://irfan-f.com) (custom domain on `gh-pages`)

## Stack

- React 18, React Router 6 (`HashRouter` for static hosting)  
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
| `npm run deploy` | Build and push `dist/` to `gh-pages` (CNAME `irfan-f.com`) |
| `npm run generate-images` | From PNG/JPEG in `public/images/`, write matching `.webp` / `.avif` |
| `npm run lint` / `npm run format` | ESLint / Prettier |

## Deploy

- `npm run deploy` uses `gh-pages` with `--cname irfan-f.com`.  
- Ensure DNS and GitHub Pages custom domain settings match your registrar.

## Content

- Project cards and detail routes are driven by `src/data/projects.ts`.  
- Large raster assets live under `public/images/` (also used for responsive `srcset` variants where generated).
