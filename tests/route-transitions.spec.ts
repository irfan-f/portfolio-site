import { expect, test, type Page } from '@playwright/test';

async function assertRouteHasContent(page: Page) {
  await expect(page.locator('#main-content')).toBeVisible();
  await expect(
    page.locator('#main-content').getByRole('heading').first(),
  ).toBeVisible();
}

test.describe('Route transitions', () => {
  test('full-motion navigation keeps route content visible across key pages', async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'no-preference' });

    await page.goto('/');
    await assertRouteHasContent(page);
    await expect(
      page.getByRole('heading', { level: 1, name: 'Irfan Filipović' }),
    ).toBeVisible();

    await page.goto('/projects');
    await assertRouteHasContent(page);
    await expect(
      page.getByRole('heading', { name: 'Mahjong with Friends' }),
    ).toBeVisible();

    // Course Work (/courses) hidden — re-enable with App route.
    // await page.goto('/courses');
    // await assertRouteHasContent(page);
    // await expect(
    //   page.getByRole('heading', {
    //     level: 2,
    //     name: 'Intro to Computer Science',
    //   }),
    // ).toBeVisible();

    await page.goto('/me');
    await assertRouteHasContent(page);
    await expect(page.getByRole('heading', { name: 'Roots' })).toBeVisible();

    await page.goto('/');
    await expect(
      page.getByRole('heading', { level: 1, name: 'Irfan Filipović' }),
    ).toBeVisible();
  });

  test('reduced-motion navigation shows correct route content', async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });

    await page.goto('/');
    await expect(
      page.getByRole('heading', { level: 1, name: 'Irfan Filipović' }),
    ).toBeVisible();

    await page.goto('/projects');
    await expect(page.getByRole('heading', { name: 'todate' })).toBeVisible();

    await page.goto('/me');
    await expect(page.getByRole('heading', { name: 'Outdoors' })).toBeVisible();

    // Course Work (/courses) hidden — re-enable with App route.
    // await page.goto('/courses');
    // await expect(
    //   page.getByRole('heading', {
    //     level: 2,
    //     name: 'Intro to Computer Science',
    //   }),
    // ).toBeVisible();
  });
});
