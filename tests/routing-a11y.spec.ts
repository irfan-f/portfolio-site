import { expect, test } from '@playwright/test';

test.describe('Routing and skip link', () => {
  test('skip link moves focus to main without changing route', async ({ page }) => {
    await page.goto('/me');
    const skip = page.getByRole('button', { name: 'Skip to main content' });
    await skip.focus();
    await expect(skip).toBeFocused();
    await skip.press('Enter');
    await expect(page).toHaveURL(/\/me$/);
    await expect(page.locator('#main-content')).toBeFocused();
    await expect(page.locator('#main-content')).toHaveJSProperty('scrollTop', 0);
  });
});
