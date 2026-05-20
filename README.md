# Portfolio site

Personal site at **[irfan-f.com](https://irfan-f.com)**

## What it is

A single-page React app with client-side routing: **Home**, **Projects**, and **About Me**. Project cards link out to live demos and GitHub repos. The site itself is mostly presentation — typography, motion, responsive layout, theme, and image delivery.

## Stack

| Layer | Choice |
|-------|--------|
| UI | React 18, TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS 4 (semantic tokens in `src/styles/index.css`) |
| Routing | React Router 6 (`BrowserRouter`; nginx SPA fallback in production) |
| Motion | Motion (`motion/react`) with `prefers-reduced-motion` respected |
| Metadata | `react-helmet-async` per route |
| Fonts | Fontsource variable faces (Dosis, Libre Franklin, Mulish) |
| Hosting | Hostinger VPS — static `dist/` behind nginx + Let's Encrypt |

## Architecture notes

**Theme before paint.** An inline script in `index.html` reads `localStorage.theme` (and legacy `darkMode`) and toggles the `dark` class on `<html>` before React mounts, with matching `theme-color` and background colors so light/dark does not flash.

**Route-level code splitting.** `Me`, `Projects`, and update detail pages load via `React.lazy`; `Home` stays in the main bundle.

**Page transitions.** `PageTransition` wraps routes and coordinates enter/exit motion; list sections use shared entrance variants from `src/motion/`.

**Images.** Responsive AVIF/WebP variants are generated from masters via `scripts/generate-images.mjs` (local, gitignored). Runtime picks format/width using `src/data/image-meta.json` and helpers in `src/utils/images.ts`. Photo binaries live in local `public/images/` and are not committed.

**Icons.** SVGs are defined in `src/icons.ts`, preloaded in `src/iconCache.ts`, and rendered through a small `Icon` component so stroke icons follow `currentColor` in both themes.

**Accessibility.** Skip link to `#main-content`, drawer navigation with focus trap on mobile, theme toggle with explicit labels, and Playwright smoke tests for routing, theme persistence, and key interactions.

## Repository layout

```
src/
  routes/          Home, Me, Projects, UpdateDetail
  components/      NavBar, cards, images, theme controls
  data/            projects.ts, courses.ts, site.ts, image-meta.json
  hooks/           theme, fonts-ready, skip-link, breakpoints
  motion/          shared transition variants
  styles/          Tailwind + design tokens
public.example/    Committed template for icons and static files
tests/             Playwright e2e (desktop + mobile projects)
```

`public/`, `deploy/`, `scripts/`, and optimized image output are **gitignored** — they stay on the machine used to build and deploy. See `public.example/README.md` for what ships in git versus what you keep locally.

## Content

| What | Where |
|------|--------|
| Project cards (title, copy, links) | `src/data/projects.ts` |
| Nav items | `src/types/nav.ts` |
| Site URL and feedback link copy | `src/data/site.ts` |
| About gallery image keys | `src/utils/images.ts` |
| Course work (disabled in nav for now) | `src/data/courses.ts`, `src/routes/CourseWork.tsx` |

## CI and quality

Pull requests run **build** (`tsc` + `vite build`) on Node 20 via GitHub Actions. E2E tests (`npm run test:e2e`) cover theme toggles, mobile drawer, project links, and route transitions; run them locally before larger UI changes.

Deploy is manual: build, then rsync `dist/` to the VPS. Operational steps live in a local `deploy/README.md` (not in this repo).

## Feedback

Issues on this repo use templates for bugs, features, and tasks. The live site links to that flow for site-specific feedback; product bugs belong on the respective project repositories.

## License

[GNU GPL v3.0](LICENSE.md) (or later). Full license text: [gnu.org/licenses/gpl-3.0.html](https://www.gnu.org/licenses/gpl-3.0.html).
