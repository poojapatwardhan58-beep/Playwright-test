const { test, expect } = require('@playwright/test');

test('Login and check Sauce Labs Backpack', async ({ page }) => {
  // Go to the login page
  await page.goto('https://www.saucedemo.com/');

  // Fill in username and password
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Click login button
  await page.click('#login-button');
await page.click('#add-to-cart-sauce-labs-backpack');
 const cartPopup = page.locator('.cart-popup');

  const cartLink = page.locator('[data-test="shopping-cart-link"]');

await expect(cartLink).toHaveAttribute('aria-label', 'Cart, 1 items');
await expect(
  page.locator('#remove-sauce-labs-backpack')
).toHaveText('Remove');
});