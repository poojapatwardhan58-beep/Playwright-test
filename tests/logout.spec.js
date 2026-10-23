import { test, expect } from '@playwright/test';
test('Test for Logout', async ({ page }) => {
  // Go to the login page
  await page.goto('https://www.saucedemo.com/');

  // Fill in username and password
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Click login button
  await page.click('#login-button');
await page.locator('.bm-burger-button').click();
await page.click('#logout_sidebar_link');
await expect(page).toHaveURL(/saucedemo/);
 await expect(page).toHaveTitle(/Swag Labs/);
});