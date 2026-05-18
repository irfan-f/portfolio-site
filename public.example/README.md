# Public assets template

The `public/` directory is not committed. Copy this folder to the repo root before running the app or building:

```bash
cp -r public.example public
```

## Icons

`icons/` contains the SVGs referenced from `src/icons.ts`. They are served from `/icons/…` at runtime.

## Photos and PWA assets

Add or replace image masters under `public/images/` (or keep sources under `scripts/sources/`). Run `npm run build:images` to generate WebP/AVIF variants and update `src/data/image-meta.json`. Photo binaries stay local; only `public.example` and source metadata ship in git.

## Favicons

`favicon.ico`, `apple-touch-icon.png`, `icon.svg`, `manifest.webmanifest`, and `robots.txt` are included here as a minimal set. Replace or extend them in your local `public/` as needed.
