export type ProjectTag = 'mahjong' | 'portfolio' | 'todate' | 'hammerspoon' | 'misc';

export const PROJECT_TAG_LABELS: Record<ProjectTag, string> = {
  mahjong: 'Mahjong',
  portfolio: 'Portfolio',
  todate: 'todate',
  hammerspoon: 'Mac Scripts',
  misc: 'Other',
};

export type LatestPostExternalLink = {
  label: string;
  href: string;
};

export type LatestPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  /** Project slug for filtering; display label from PROJECT_TAG_LABELS. */
  projectTag: ProjectTag;
  /** Full update copy — one string per paragraph. */
  body: string[];
  /** Optional image for the card and detail page; omit unless you add one. */
  imageSrc?: string;
  /** Optional CTA on the detail page (live app, repo, related route). */
  externalLink?: LatestPostExternalLink;
  /**
   * When false, the card skips “Read more” (excerpt is enough).
   * Omit to show Read more when the detail view adds substantial copy.
   */
  showReadMore?: boolean;
};

/** Detail page is worth opening from the card teaser. */
export function postShowsReadMore(post: LatestPost): boolean {
  if (post.showReadMore === false) return false;
  if (post.showReadMore === true) return true;

  const excerptWords = post.excerpt.split(/\s+/).length;
  const bodyWords = post.body.join(' ').split(/\s+/).length;
  return post.body.length >= 3 && bodyWords >= Math.max(90, Math.round(excerptWords * 1.45));
}

export const UPDATES_PATH_PREFIX = '/updates';

export function updateDetailPath(postId: string): string {
  return `${UPDATES_PATH_PREFIX}/${postId}`;
}

export function getLatestPostById(postId: string): LatestPost | undefined {
  return latestPosts.find((post) => post.id === postId);
}

/** Updates grounded in shipped work and recent portfolio-site changes. */
export const latestPosts: LatestPost[] = [
  {
    id: 'portfolio-latest-section',
    title: 'Home updates section with filters',
    date: 'May 2026',
    excerpt:
      'I added Catch up on the latest things below the hero: a beacon scroll CTA, editorial card grid, and compact project filters plus search—not a full blog yet, but a place to scan what changed.',
    projectTag: 'portfolio',
    showReadMore: false,
    body: [
      'Home needed a place for short write-ups—shipping notes, deploy logs, and site changes—without pretending to be a full blog yet.',
      'ScrollToLatestCta uses the beacon variant above the fold; clicking it scrolls to #latest-things with smooth behavior unless prefers-reduced-motion is on. The hero is sized to the scrollport so the CTA is visible on first load.',
      'LatestThingsSection runs in editorial mode: the first filtered post is a large lifted card, the rest sit in a two-column glass grid. Filter chips map to projectTag; search matches title and excerpt. Read more opens /updates/:id with full body copy.',
      'I kept the toolbar compact—underline search and small chips beside the heading—so the cards stay the focus.',
    ],
  },
  {
    id: 'portfolio-gitignore-assets',
    title: 'Local image pipeline after gitignoring public/',
    date: 'May 2026',
    excerpt:
      'PR #57 stopped tracking binaries under public/images/; I keep masters locally and regenerate AVIF/WebP with scripts/generate-images.mjs before rsync deploy to the Hostinger VPS.',
    projectTag: 'portfolio',
    externalLink: {
      label: 'View PR #57',
      href: 'https://github.com/irfan-f/portfolio-site/pull/57',
    },
    body: [
      'The portfolio repo was carrying large PNGs and hero photos in public/images/. PR #57 gitignores those paths so clones stay small and diffs stay readable.',
      'I keep source masters on disk locally and run npm run build:images, which executes scripts/generate-images.mjs with Sharp to emit AVIF and WebP at the widths the Vite app references.',
      'Deploy still rsyncs the built dist/ and generated assets to the Hostinger VPS. I did not automate a remote image CDN—this is a personal site, and the pipeline is good enough for occasional refreshes.',
      'If you clone the repo, expect public.example/ or docs to describe which files you need locally before a production build.',
    ],
  },
  {
    id: 'mahjong-production',
    title: 'Mahjong with Friends is in production',
    date: 'Apr 2026',
    excerpt:
      'The game runs at mahjong.irfan-f.com on GitHub Pages; the Express API is on irfquake.tech with Firebase Bearer tokens on protected routes and live four-player table sync.',
    projectTag: 'mahjong',
    externalLink: {
      label: 'Play at mahjong.irfan-f.com',
      href: 'https://mahjong.irfan-f.com',
    },
    body: [
      'My goal was to get Mahjong with Friends off localhost and into a session my friends could join from a link. I kept the stack familiar: Vite + React on GitHub Pages, Express on irfquake.tech, Firebase for Google sign-in.',
      'Production domains had to land in Firebase Authentication → Authorized domains or OAuth redirects fail silently. On the server, nginx proxy_pass must not add a trailing slash on the upstream URL, or /api/user/lobbies becomes a 404.',
      'CORS_ORIGIN in the API .env lists the Pages origin; I restart the process after env changes. A 403 from curl usually means the route exists and auth failed—which is what I want when smoke-testing.',
      'Reconnect during an active hand and host migration are still the fragile paths; I log those in separate updates when I change lobby sync.',
    ],
  },
  {
    id: 'mahjong-github-pages-env',
    title: 'GitHub Pages build env for Mahjong',
    date: 'Apr 2026',
    excerpt:
      'I pass VITE_API_URL and Firebase config through the Actions build step and repo secrets so the deployed bundle initializes auth instead of showing a blank page.',
    projectTag: 'mahjong',
    showReadMore: false,
    externalLink: {
      label: 'mahjong-frontend repo',
      href: 'https://github.com/irfan-f/mahjong-frontend',
    },
    body: [
      'The first production deploy showed a blank page because Vite inlined undefined for VITE_* and Firebase keys—the GitHub Actions build step never received the secrets.',
      'I added repository secrets for the API base URL and each Firebase config value, then wired them into the workflow Build step so the artifact matches what I use locally in .env.',
      'HashRouter and base: "./" stay tuned for GitHub Pages paths. I restrict the TypeScript build to src/ so legacy folders do not break npm run build in CI.',
      'After a green workflow run, I still spot-check auth and one lobby join on the live domain; missing Authorized domains is the other common blank-page cause.',
    ],
  },
  {
    id: 'mahjong-heuristic-bots',
    title: 'Heuristic opponents for practice play',
    date: 'Mar 2026',
    excerpt:
      'I started scaffolding rule-based bot seats so a table can fill without four humans; reinforcement-learning opponents are still on the roadmap, not shipped.',
    projectTag: 'mahjong',
    externalLink: {
      label: 'Play at mahjong.irfan-f.com',
      href: 'https://mahjong.irfan-f.com',
    },
    body: [
      'Four humans are not always online when I want to test a rule change. I added bot seats that follow Hong Kong Mahjong heuristics—discard safety, basic meld priority, no training loop yet.',
      'Reinforcement-learning opponents are still on the roadmap, not shipped. What runs today is rule-based scaffolding so lobbies can start with mixed human and bot players.',
      'Bots share the same WebSocket table state as humans; the server treats their actions like any other seat. I have not tuned difficulty tiers or explainable “why this discard” UI.',
      'If you try production, expect straightforward opponents, not a strong AI. I log regressions when a bot discards a obvious winning tile—that is how I know the heuristic layer needs another pass.',
    ],
  },
  {
    id: 'todate-theme',
    title: 'todate: theme before first paint',
    date: 'Mar 2026',
    excerpt:
      'todate.irfan-f.com reads localStorage.theme and prefers-color-scheme in index.html before React mounts, same pattern as this site, so the school-year timeline does not flash the wrong mode.',
    projectTag: 'todate',
    showReadMore: false,
    externalLink: {
      label: 'Open todate',
      href: 'https://todate.irfan-f.com',
    },
    body: [
      'todate is a timeline for dates, tags, and school years—React, Vite, and Tailwind v4. Theme mattered because the default flash on load looked broken on dark mode phones.',
      'The fix matches this portfolio: a small inline script in index.html sets class="dark" on <html> from localStorage.theme or prefers-color-scheme before the bundle runs.',
      'I paired that with inline background colors on html and body so the first paint uses the zinc gray base in dark mode and white in light mode, not a hard-coded blue gradient.',
      'OG images have a dark variant (todate-og-dark.svg) for link previews; in-app surfaces still follow CSS variables.',
    ],
  },
  {
    id: 'portfolio-playwright',
    title: 'Playwright smoke tests on the portfolio',
    date: 'Mar 2026',
    excerpt:
      'I added Playwright coverage for theme persistence, mobile drawer navigation, and project link routing on desktop and mobile—run with npm run test:e2e before larger UI changes.',
    projectTag: 'portfolio',
    showReadMore: false,
    externalLink: {
      label: 'portfolio-site repo',
      href: 'https://github.com/irfan-f/portfolio-site',
    },
    body: [
      'UI refactors were outrunning manual checks. I added Playwright with separate desktop-chromium and mobile-chromium projects so theme, routing, and the nav drawer stay covered.',
      'Specs assert light/dark persistence, route transitions, skip-link focus to #main-content, and that project links resolve. I run npm run test:e2e before deploy when I touch layout or navigation.',
      'Tests live beside the app under tests/; helpers centralize viewport and theme setup so I do not duplicate boilerplate in every spec.',
      'I did not aim for full visual regression—only smoke paths I break often. Flaky network calls are out of scope; everything hits the local dev server or built preview.',
    ],
  },
  {
    id: 'hammerspoon-mac-scripts',
    title: 'Hammerspoon layouts and Spoons',
    date: 'Feb 2026',
    excerpt:
      'My Mac Scripts repo is Hammerspoon config: window tiling across displays, global keybinds, menubar helpers, and Spoons for OCR and a light filter—personal automation, not a web deploy.',
    projectTag: 'hammerspoon',
    externalLink: {
      label: 'Hammerspoon repo',
      href: 'https://github.com/irfan-f/Hammerspoon',
    },
    body: [
      'Mac Scripts on the Projects page is my Hammerspoon configuration—Lua, not a hosted app. I version it on GitHub so a new MacBook is mostly a clone and a reload.',
      'Window management spans multiple displays: snapping halves, moving workspaces, and remembering which monitor should own the IDE versus the browser.',
      'Spoons add OCR from screen regions and a light filter I toggle from the menubar. Global keybinds are tuned for my keyboard; they are not meant as a universal preset.',
      'I update the repo when macOS or Hammerspoon breaks an API—there is no CI, only daily use as the test suite.',
    ],
  },
];
