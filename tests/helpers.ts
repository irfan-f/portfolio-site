import type { Page } from '@playwright/test';

/** Menu button keeps a stable `aria-controls` while `aria-label` toggles Open/Close. */
export function navigationMenuToggle(page: Page) {
  return page.locator('button[aria-controls="menu-sidebar"]');
}
