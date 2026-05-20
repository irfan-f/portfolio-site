import { expect, test } from '@playwright/test';

/** Mirrors `src/data/projects.ts` display order for stable grid assertions */
const EXPECTED_PROJECT_TITLES = [
  'Mahjong with Friends',
  'Mac Scripts',
  'todate',
] as const;

test.describe('Projects', () => {
  test('grid lists expected project titles', async ({ page }) => {
    await page.goto('/projects');
    for (const title of EXPECTED_PROJECT_TITLES) {
      await expect(
        page.getByRole('heading', { level: 2, name: title }),
      ).toBeVisible();
    }
  });

  test('project cards show description copy', async ({ page }) => {
    await page.goto('/projects');

    await expect(
      page.getByText('Real-time multiplayer Hong Kong Mahjong in the browser'),
    ).toBeVisible();
    await expect(
      page.getByText('Hammerspoon config and Spoons: windows, keybinds, displays'),
    ).toBeVisible();
    await expect(
      page.getByText('Timeline app with tags, school-year dates, and theme support'),
    ).toBeVisible();
  });

  test('Try it and GitHub links on grid cards have expected href and rel', async ({
    page,
  }) => {
    await page.goto('/projects');

    const tryIt = page.getByRole('link', {
      name: 'Try it: Mahjong with Friends',
    });
    await expect(tryIt).toHaveAttribute(
      'href',
      'https://mahjong.irfan-f.com',
    );
    await expect(tryIt).toHaveAttribute('target', '_blank');
    await expect(tryIt).toHaveAttribute('rel', 'noopener noreferrer');

    const gridGithub = page.getByRole('link', {
      name: 'Mac Scripts on GitHub',
    });
    await expect(gridGithub).toHaveAttribute(
      'href',
      'https://github.com/irfan-f/Hammerspoon',
    );
    await expect(gridGithub).toHaveAttribute('target', '_blank');
  });
});
