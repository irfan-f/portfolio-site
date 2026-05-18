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

  test('Try it and GitHub links on grid card have expected href and rel', async ({
    page,
  }) => {
    await page.goto('/projects');

    const tryIt = page.getByRole('link', {
      name: 'Try it: Mahjong with Friends',
    });
    await expect(tryIt).toHaveAttribute(
      'href',
      'https://irfan-f.github.io/mahjong-frontend/',
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
