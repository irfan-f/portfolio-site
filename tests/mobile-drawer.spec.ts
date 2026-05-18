import { expect, test } from '@playwright/test';
import { navigationMenuToggle } from './helpers';

test.describe('Mobile navigation drawer', () => {
  test('opens, navigates to Projects, closes, and updates aria-expanded', async ({
    page,
  }) => {
    await page.goto('/');
    const menuButton = navigationMenuToggle(page);
    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    const dialog = page.getByRole('dialog', { name: 'Navigation menu' });
    await expect(dialog).toBeVisible();

    await dialog.getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/\/projects\/?$/);
    await expect(
      page.getByRole('heading', { name: 'Mahjong with Friends' }),
    ).toBeVisible();

    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('Escape closes the drawer', async ({ page }) => {
    await page.goto('/');
    const menuButton = navigationMenuToggle(page);
    await menuButton.click();
    await expect(
      page.getByRole('dialog', { name: 'Navigation menu' }),
    ).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(menuButton).toBeFocused();
  });

  test('moves focus to the first navigation link when opened', async ({
    page,
  }) => {
    await page.goto('/');
    const menuButton = navigationMenuToggle(page);
    await menuButton.click();
    const homeLink = page
      .getByRole('dialog', { name: 'Navigation menu' })
      .getByRole('link', { name: 'Home' });
    await expect(homeLink).toBeFocused();
  });

  test('clicking the dimmed backdrop closes the drawer', async ({
    page,
  }) => {
    await page.goto('/');
    const menuButton = navigationMenuToggle(page);
    await menuButton.click();
    await expect(
      page.getByRole('dialog', { name: 'Navigation menu' }),
    ).toBeVisible();

    const backdrop = page.locator('#menu-sidebar');
    const box = await backdrop.boundingBox();
    if (!box) throw new Error('Expected drawer backdrop bounding box');

    await page.mouse.click(box.x + box.width / 2, box.y + box.height - 8);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});
