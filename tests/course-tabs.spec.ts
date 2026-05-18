import { expect, test } from '@playwright/test';

// Course Work (/courses) hidden until section has more substance — un-skip when route is back.
test.describe.skip('Course work tabs', () => {
  test('full motion switches adjacent topic and updates tab selection', async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await page.goto('/courses');

    const intro = page.getByRole('tab', {
      name: 'Intro to Computer Science',
    });
    const algorithms = page.getByRole('tab', {
      name: 'Intermediate Algorithms',
    });

    await expect(intro).toHaveAttribute('aria-selected', 'true');
    await algorithms.click();
    await expect(algorithms).toHaveAttribute('aria-selected', 'true');
    await expect(intro).toHaveAttribute('aria-selected', 'false');
    await expect(
      page.getByRole('heading', { level: 2, name: 'Intermediate Algorithms' }),
    ).toBeVisible();
  });

  test('reduced motion switches non-adjacent topic and updates content', async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/courses');

    const intro = page.getByRole('tab', {
      name: 'Intro to Computer Science',
    });
    const ml = page.getByRole('tab', { name: 'Machine Learning' });

    await expect(intro).toHaveAttribute('aria-selected', 'true');
    await ml.click();
    await expect(ml).toHaveAttribute('aria-selected', 'true');
    await expect(
      page.getByRole('heading', { level: 2, name: 'Machine Learning' }),
    ).toBeVisible();
  });
});
