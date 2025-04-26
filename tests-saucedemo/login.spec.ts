// @ts-check
import { test, expect } from '@playwright/test';

// Importing page objects
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import Components from '../pages/Components';

import loginCredentials from '../test-data/login_credentials.json';

// Extracting credentials for both valid and invalid cases
const {
  credentials_1: { valid_username, valid_password },
  credentials_2: { invalid_username, invalid_password }
} = loginCredentials.data;


/**
 * Test suite for Sauce Demo login functionality.
 */
test.describe('Sauce Demo - [LOGIN]', () => {

  /**
   * Before each test, navigate to the homepage and create instances of Pages.
   */
  test.beforeEach(async({ page }) =>{
    // Navigate to application
    await page.goto('/')  
  })

  test('[LOGIN] Login with valid credentials. Validate that User is able to login using valid credentials. @regression @sanity', async ({ page }) => {
    
    // Navigate to application
    await page.goto('/');

    // Fill valid credentials and Login 
    const loginPage = new LoginPage(page)
    await loginPage.loginToApplication(valid_username, valid_password)

    // Assertions for successful login

    // Verify the heading on the Products page
    const productsPage = new ProductsPage(page)
    await expect(productsPage.get_heading_products()).toHaveText('Products')
    
    // Verify the logo on the header
    const components = new Components(page)
    await expect(components.get_header_logo_swag_labs()).toHaveText('Swag Labs')

    // Verify the copyright message in the footer
    await expect(components.get_footer_msg_copyright()).toContainText(' Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')

    // Verify that LinkedIn link in the footer is present
    await expect(components.get_footer_link_linkedin()).toBeVisible()

    // Verify the href attribute and value for the LinkedIn link in the footer
    await expect(components.get_footer_link_linkedin()).toHaveAttribute('href', 'https://www.linkedin.com/company/sauce-labs/')
    
  });

  test('[LOGIN] Login with invalid credentials. Validate that User is unable to login using invalid credentials. @regression', async ({ page }) => {
    
    // Navigate to application
    await page.goto('/');

    // Fill invalid credentials and Login 
    const loginPage = new LoginPage(page)
    await loginPage.loginToApplication(invalid_username, invalid_password)

    // Verify the error message for Username and Password mismatch
    await expect(loginPage.get_message_error_not_match()).toContainText('Username and password do not match')
    
  });

});