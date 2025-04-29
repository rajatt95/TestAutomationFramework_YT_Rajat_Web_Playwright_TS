// @ts-check
import { test, expect } from '@playwright/test';

// Importing page objects
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import Components from '../pages/Components';
import verificationUtils from '../utils/VerificationUtils';

// Importing test data
import loginCredentials from '../test-data/login_credentials.json';

// Extracting credentials for both valid and invalid cases
const {
  credentials_1: { valid_username, valid_password },
  credentials_2: { invalid_username, invalid_password }
} = loginCredentials.data;


/**
 * Test suite for Sauce Demo login functionality.
 */
test.describe('[LOGIN]', () => {

  /**
   * Before each test, navigate to the application homepage.
   */
  test.beforeEach(async({ page }) =>{
    // Navigate to application
    await page.goto('/')  
  })

  /**
   * [LOGIN] Test Case:
   * Validate that a user is able to successfully log in using valid credentials.
   * - Verify Products page heading after login
   * - Verify header logo
   * - Verify footer elements and LinkedIn link
   * 
   * Tags: @regression @sanity
   */
  test('Login with valid credentials. Validate that User is able to login using valid credentials. @regression @sanity', async ({ page }) => {
    
    // Navigate to application
    await page.goto('/');

    // Perform login with valid credentials
    const loginPage = new LoginPage(page)
    await loginPage.loginToApplication(valid_username, valid_password)

    // Assertions for successful login

    // Verify the heading on the Products page
    const productsPage = new ProductsPage(page)
    verificationUtils.elementHasText(productsPage.heading_products, 'Products')
    
    // Verify the logo on the header
    const components = new Components(page)
    verificationUtils.elementHasText(components.header_logo_swag_labs, 'Swag Labs')

    // Verify the copyright message in the footer
    verificationUtils.elementContainsText(components.footer_msg_copyright, ' Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')

    // Verify that LinkedIn link in the footer is present
    verificationUtils.elementIsVisible(components.footer_link_linkedin, "Footer: LinkedIn link")

    // Verify the href attribute and value for the LinkedIn link in the footer
    verificationUtils.elementHasAttributeAndHasValue(components.footer_link_linkedin, "Footer: LinkedIn link", 'href', 'https://www.linkedin.com/company/sauce-labs/')    
    
  });

  /**
   * [LOGIN] Test Case:
   * Validate that a user is unable to log in using invalid credentials.
   * - Verify the error message for incorrect Username and Password
   * 
   * Tags: @regression
   */
  test('Login with invalid credentials. Validate that User is unable to login using invalid credentials. @regression', async ({ page }) => {
    
    // Navigate to application
    await page.goto('/');

    // Perform login with invalid credentials
    const loginPage = new LoginPage(page)
    await loginPage.loginToApplication(invalid_username, invalid_password)

    // Verify the error message for Username and Password mismatch
    verificationUtils.elementContainsText(loginPage.message_error_not_match, 'Username and password do not match')
    
  });

});