import { defineConfig, devices } from '@playwright/test';

const PORT = 5173;
const BASE_URL = `http://127.0.0.1:${PORT}`;

/** Specs that only apply to one viewport; keeps workers busy without no-op skips. */
const DESKTOP_ONLY_IGNORE = [
  '**/mobile-drawer.spec.ts',
  '**/theme.mobile.spec.ts',
];
const MOBILE_ONLY_IGNORE = [
  '**/routing-desktop-nav.spec.ts',
  '**/theme.desktop.spec.ts',
];

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'desktop-chromium',
      use: { ...devices['Desktop Chrome'] },
      testIgnore: DESKTOP_ONLY_IGNORE,
    },
    {
      name: 'mobile-chromium',
      use: { ...devices['Pixel 5'] },
      testIgnore: MOBILE_ONLY_IGNORE,
    },
  ],
  webServer: {
    command: `npm run dev -- --host 127.0.0.1 --port ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
