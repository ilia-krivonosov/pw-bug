import { test, expect } from '@playwright/test';

for (let i = 0; i < 20; i++) {
  test(`TEST-2: select ${i}`, async ({ page }) => {
    await page.goto('https://ilia-krivonosov.github.io/dropdown/');

    await page.waitForTimeout(300);
    await page.locator('.multiselect__select').click();
    await page.locator('li.multiselect__element').filter({ hasText: 'Option 3' }).click();
    await expect(page.locator('.multiselect__single')).toHaveText('Option 3');
  })
}
