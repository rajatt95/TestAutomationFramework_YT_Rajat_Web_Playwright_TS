// Importing necessary modules for Playwright test
import { test } from '@playwright/test';

// Importing page objects
import LoginPage from '../pages/LoginPage';
import CartPage from '../pages/CartPage';
import Components from '../pages/Components';
import verificationUtils from '../utils/VerificationUtils';

/**
 * Test suite for Sauce Demo Application Components.
 */
test.describe('[COMPONENTS]', () => {

  /**
   * Before each test, navigate to the application homepage and login.
   */
  test.beforeEach(async ({ page }) => {
    // Navigate to application and Login
    await page.goto('/');  
    const loginPage = new LoginPage(page);
    await loginPage.loginToApplicationWithValidCredentials();

  });

  /**
   * Test case: [Header] Static Messages. Validate that User is able to see messages in Header component.
   * @tags {regression, sanity}
   */
  test('[Header] Static Messages. Validate that User is able to see messages in Header component. @regression @sanity', async ({ page }) => {
   
    // Verify the side-panel expand icon on the header
    const components = new Components(page);    
    await verificationUtils.elementIsVisible(components.get_side_panel_icon_expand());

    // Verify the logo on the header
    await verificationUtils.elementHasText(components.get_header_logo_swag_labs(), 'Swag Labs');
    
    // Verify the cart icon on the header
    await verificationUtils.elementIsVisible(components.get_header_icon_cart());
  });  
  
  /**
   * Test case: [Header] Navigate to Cart Page. Validate that User is able to navigate to Cart Page using Cart icon.
   * @tags {regression}
   */
  test('[Header] Navigate to Cart Page. Validate that User is able to navigate to Cart Page using Cart icon. @regression', async ({ page }) => {
   
    // Click on Cart icon
    const components = new Components(page);
    await components.click_header_icon_cart();

    // Verify that User is on Cart Page
    const cartPage = new CartPage(page);
    await verificationUtils.elementHasText(cartPage.get_heading_your_cart(), 'Your Cart');
  
    // Verify the Page URL
    await verificationUtils.pageContainsUrl(page, 'cart');
    // await verificationManager.pageHasUrl(page, 'https://www.saucedemo.com/cart.html');
    await verificationUtils.pageHasUrl(page, 'cart.html'); // baseUrl value will be fetched from playwright.config.ts file

    // Verify the Page Title
    // await verificationManager.pageContainsTitle(page, 'Labs');
    await verificationUtils.pageHasTitle(page, 'Swag Labs');
  });

  /**
   * Test case: [Footer] Static Messages. Validate that User is able to see messages in Footer component.
   * @tags {regression, sanity}
   */
  test('[Footer] Static Messages. Validate that User is able to see messages in Footer component. @regression @sanity', async ({ page }) => {
    const components = new Components(page);

    // Verify the social links icons are visible
    await verificationUtils.elementIsVisible(components.get_footer_link_twitter(), "Footer: Twitter link");
    await verificationUtils.elementIsVisible(components.get_footer_link_facebook(), "Footer: Facebook link");
    await verificationUtils.elementIsVisible(components.get_footer_link_linkedin(), "Footer: LinkedIn link");

    // Verify the copyright message
    await verificationUtils.elementContainsText(components.get_footer_msg_copyright(), 'Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');

  });

  /**
   * Test case: [Footer] Links navigation. Validate that User is able to navigate to social platforms using icons.
   * @tags {regression}
   */
  test('[Footer] Links navigation. Validate that User is able to navigate to social platforms using icons. @regression', async ({ page }) => {
    const components = new Components(page);

    // Verify the social links have correct href attributes
    await verificationUtils.elementHasAttributeAndHasValue(components.get_footer_link_twitter(), "href", "https://twitter.com/saucelabs");

    await verificationUtils.elementHasAttributeAndHasValue(components.get_footer_link_facebook(),"href", "https://www.facebook.com/saucelabs");

    await verificationUtils.elementHasAttributeAndHasValue(components.get_footer_link_linkedin(), "href", "https://www.linkedin.com/company/sauce-labs/");

  });

});