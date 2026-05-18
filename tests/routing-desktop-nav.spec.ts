import { expect, test } from '@playwright/test';

test.describe('Routing (desktop primary nav)', () => {
  test('desktop primary navigation visits routes with expected content', async ({
    page,
  }) => {
    await page.goto('/');
    await expect(
      page.getByRole('heading', { level: 1, name: 'Irfan Filipović' }),
    ).toBeVisible();

    await page.getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/\/projects\/?$/);
    await expect(
      page.getByRole('heading', { name: 'Mahjong with Friends' }),
    ).toBeVisible();

    await page.getByRole('link', { name: 'About Me' }).click();
    await expect(page).toHaveURL(/\/me$/);
    await expect(page.getByRole('heading', { name: 'Roots' })).toBeVisible();

    // Course Work (/courses) hidden — re-enable with nav + App route.
    // await page.getByRole('link', { name: 'Course Work' }).click();
    // await expect(page).toHaveURL(/#\/courses$/);
    // await expect(
    //   page.getByRole('tablist', { name: 'Course work topics' }),
    // ).toBeVisible();
    // await expect(
    //   page.getByRole('heading', {
    //     level: 2,
    //     name: 'Intro to Computer Science',
    //   }),
    // ).toBeVisible();

    await page
      .getByRole('navigation', { name: 'Site' })
      .getByRole('link', { name: 'Irfan Filipovic, home' })
      .click();
    await expect(page).toHaveURL(/\/$/);
    await expect(
      page.getByRole('heading', { level: 1, name: 'Irfan Filipović' }),
    ).toBeVisible();
  });
});
