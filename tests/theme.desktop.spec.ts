import { expect, test } from '@playwright/test';

test.describe('Theme toggle (desktop)', () => {
  test('desktop cycles light → dark → system → light and updates html class', async ({
    page,
  }) => {
    await page.addInitScript(() => {
      localStorage.setItem('theme', 'light');
    });
    await page.goto('/');

    const html = page.locator('html');
    await expect(html).not.toHaveClass(/dark/);

    await page.getByRole('button', { name: 'Switch to dark mode' }).click();
    await expect(html).toHaveClass(/dark/);
    expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe(
      'dark',
    );

    await page.getByRole('button', { name: 'Switch to system theme' }).click();
    expect(await page.evaluate(() => localStorage.getItem('theme'))).toBeNull();

    await page.getByRole('button', { name: 'Switch to light mode' }).click();
    await expect(html).not.toHaveClass(/dark/);
    expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe(
      'light',
    );
  });

  test('persists dark theme across reload', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('theme', 'dark');
    });
    await page.goto('/');
    await expect(page.locator('html')).toHaveClass(/dark/);

    await page.reload();
    await expect(page.locator('html')).toHaveClass(/dark/);
    expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe(
      'dark',
    );
  });
});
