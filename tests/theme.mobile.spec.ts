import { expect, test } from '@playwright/test';
import { navigationMenuToggle } from './helpers';

test.describe('Theme toggle (mobile)', () => {
  test('mobile drawer exposes theme control with expected labels', async ({
    page,
  }) => {
    await page.addInitScript(() => {
      localStorage.setItem('theme', 'light');
    });
    await page.goto('/');

    await navigationMenuToggle(page).click();
    const dialog = page.getByRole('dialog', { name: 'Navigation menu' });
    await expect(
      dialog.getByRole('button', { name: 'Switch to dark mode' }),
    ).toBeVisible();

    await dialog.getByRole('button', { name: 'Switch to dark mode' }).click();
    await expect(page.locator('html')).toHaveClass(/dark/);
  });
});
