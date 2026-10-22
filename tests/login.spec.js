// @ts-check
const { test, expect } = require('@playwright/test');

test('Login and check Sauce Labs Backpack', async ({ page }) => {
  // Go to the login page
  await page.goto('https://www.saucedemo.com/');

  // Fill in username and password
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Click login button
  await page.click('#login-button');

  // Verify navigation to inventory page
  await expect(page).toHaveURL(/.*inventory.html/);

  // Check that Sauce Labs Backpack is visible
  const backpackTitle = page.locator('.inventory_item_name', { hasText: 'Sauce Labs Backpack' });
  await expect(backpackTitle).toBeVisible();
});

test('Login and check invalid login', async ({ page }) => {
  // Go to the login page
  await page.goto('https://www.saucedemo.com/');

  // Fill in username and password
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce1');

  // Click login button
  await page.click('#login-button');
const actual = await page.locator('[data-test="error"]').textContent();
let expected= "Epic sadface: Username and password do not match any user in this service"

expect(actual).toBe(expected);
});

