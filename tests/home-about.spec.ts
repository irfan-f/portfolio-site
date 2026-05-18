import { expect, test } from '@playwright/test';

test.describe('About and home smoke', () => {
  test('About Me sections are reachable inside main content', async ({
    page,
  }) => {
    await page.goto('/me');
    const main = page.locator('#main-content');

    for (const title of [
      'Roots',
      'Outdoors',
      'Cooking',
      'Biking',
      'Gardening',
      'More to come...',
    ]) {
      const heading = page.getByRole('heading', { name: title });
      await heading.scrollIntoViewIfNeeded();
      await expect(main).toContainText(title);
    }
  });

  test('home hero image, intro, and social links use stable accessible names', async ({
    page,
  }) => {
    await page.goto('/');
    await expect(
      page.getByRole('heading', { level: 1, name: 'Irfan Filipović' }),
    ).toBeVisible();
    await expect(page.getByText("Hi I'm,")).toBeVisible();
    await expect(
      page.getByRole('img', { name: 'Irfan Filipović' }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', { name: 'GitHub', exact: true }),
    ).toHaveAttribute('href', 'https://github.com/irfan-f');
    await expect(
      page.getByRole('link', { name: 'LinkedIn', exact: true }),
    ).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/irfan-filipovic/',
    );
  });

  test('home intro stays above hero photo on a short viewport', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 320 });
    await page.goto('/');
    const intro = page.getByTestId('home-intro');
    const img = page.getByRole('img', { name: 'Irfan Filipović' });
    await expect(intro).toBeVisible();
    await expect(img).toBeVisible();
    const introBox = await intro.boundingBox();
    const imgBox = await img.boundingBox();
    expect(introBox).toBeTruthy();
    expect(imgBox).toBeTruthy();
    expect(introBox!.y + introBox!.height).toBeLessThanOrEqual(imgBox!.y + 10);
    expect(imgBox!.height).toBeGreaterThan(96);
  });
});
