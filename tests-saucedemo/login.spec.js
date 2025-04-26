// @ts-check
import { test, expect } from '@playwright/test';

test('[LOGIN] Login with valid credentials. Validate that User is able to login using valid credentials.', async ({ page }) => {
  
  // Navigate to application
  await page.goto('https://www.saucedemo.com/');

  // Fill valid credentials and Login 
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Assertions for successful login

  // Verify the heading on the Products page
  await expect(page.locator('.title')).toHaveText('Products');
  
  // Verify the logo on the header
  await expect(page.locator('.app_logo')).toHaveText('Swag Labs');

  // Verify the copyright message in the footer
  await expect(page.locator('.footer_copy')).toContainText('Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');

  // Verify that LinkedIn link in the footer is present
  await expect(page.getByRole('link', { name: 'LinkedIn' })).toBeVisible();

  // Verify the href attribute and value for the LinkedIn link in the footer
  await expect(page.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/company/sauce-labs/');
  
});