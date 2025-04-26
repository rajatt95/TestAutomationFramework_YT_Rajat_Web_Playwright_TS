// Importing necessary modules for Playwright test
import { test } from '@playwright/test';

// Importing page objects
import LoginPage from '../pages/LoginPage';
import CartPage from '../pages/CartPage';
import Components from '../pages/Components';

// Importing utilities
import verificationUtils from '../utils/VerificationUtils';
import waitUtils from '../utils/WaitUtils';

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
    await verificationUtils.elementIsVisible(components.side_panel_icon_expand, "Side-Panel: Expand icon");

    // Verify the logo on the header
    await verificationUtils.elementHasText(components.header_logo_swag_labs, 'Swag Labs');
    
    // Verify the cart icon on the header
    await verificationUtils.elementIsVisible(components.header_icon_cart, "Header: Cart icon");

    // Verify the CSS Property of the logo
    verificationUtils.elementHasCSSPropertyAndHasValue(components.header_logo_swag_labs, "Header: Swag Labs", "font-size","24px")
    // verificationUtils.elementHasCSSPropertyAndHasValue(components.header_logo_swag_labs, "Header: Swag Labs", "font-family",'"DM Mono", "sans-serif"')
    verificationUtils.elementHasCSSPropertyAndHasValue(components.header_logo_swag_labs, "Header: Swag Labs", "color","rgb(19, 35, 34)")

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
    await verificationUtils.elementHasText(cartPage.heading_your_cart, 'Your Cart');
  
    // Verify the Page URL
    await verificationUtils.pageContainsUrl(page, 'cart');
    // await verificationUtils.pageHasUrl(page, 'https://www.saucedemo.com/cart.html');
    await verificationUtils.pageHasUrl(page, 'cart.html'); // baseUrl value will be fetched from playwright.config.ts file

    // Verify the Page Title
    // await verificationUtils.pageContainsTitle(page, 'Labs');
    await verificationUtils.pageHasTitle(page, 'Swag Labs');
  });

  /**
   * Test case: [Footer] Static Messages. Validate that User is able to see messages in Footer component.
   * @tags {regression, sanity}
   */
  test('[Footer] Static Messages. Validate that User is able to see messages in Footer component. @regression @sanity', async ({ page }) => {
    const components = new Components(page);

    // Verify the social links icons are visible
    await verificationUtils.elementIsVisible(components.footer_link_twitter, "Footer: Twitter link");
    await verificationUtils.elementIsVisible(components.footer_link_facebook, "Footer: Facebook link");
    await verificationUtils.elementIsVisible(components.footer_link_linkedin, "Footer: LinkedIn link");

    // Verify the copyright message
    await verificationUtils.elementContainsText(components.footer_msg_copyright, 'Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');

  });

  /**
   * Test case: [Footer] Links navigation. Validate that User is able to navigate to social platforms using icons.
   * @tags {regression}
   */
  test('[Footer] Links navigation. Validate that User is able to navigate to social platforms using icons. @regression', async ({ page }) => {
    const components = new Components(page);

    // Verify the social links have correct href attributes
    await verificationUtils.elementHasAttributeAndHasValue(components.footer_link_twitter, "href", "https://twitter.com/saucelabs");

    await verificationUtils.elementHasAttributeAndHasValue(components.footer_link_facebook,"href", "https://www.facebook.com/saucelabs");

    await verificationUtils.elementHasAttributeAndHasValue(components.footer_link_linkedin, "href", "https://www.linkedin.com/company/sauce-labs/");

  });

  /**
   * Test case: [Side-Panel] Static Messages. Validate that User is able to see messages in Side-Panel component.
   * @tags {regression, sanity}
   */
  test('[Side-Panel] Static Messages. Validate that User is able to see messages in Side-Panel component. @regression @sanity', async ({ page }) => {

    // Open Side-Panel
    const components = new Components(page);    
    await components.click_side_panel_icon_expand();

    // Verify Links in Side-Panel
    await verificationUtils.elementHasText(components.side_panel_link_allItems, "All Items");
    await verificationUtils.elementHasText(components.side_panel_link_about, "About");
    await verificationUtils.elementHasText(components.side_panel_link_logout, "Logout");
    await verificationUtils.elementHasText(components.side_panel_link_resetAppState, "Reset App State");

    await verificationUtils.elementsCount(components.side_panel_links, "Side-Panel links", 4)

    await verificationUtils.elementIsVisible(components.side_panel_icon_cross, "Side-Panel: Cross icon");

  });

  /**
   * Test case: [Side-Panel] Panel Expand/Collapse. Validate that User is able to expand/collapse panel using icons.
   * @tags {regression}
   */
  test('[Side-Panel] Panel Expand/Collapse. Validate that User is able to expand/collapse panel using icons. @regression', async ({ page }) => {

    // Open Side-Panel
    const components = new Components(page);    
    await components.click_side_panel_icon_expand();

    await waitUtils.waitForGivenTime(2); // Wait 2 seconds

    await verificationUtils.elementIsVisible(components.side_panel_icon_cross, "Side-Panel: Cross icon");

    // Close Side-Panel
    await components.click_side_panel_icon_cross();
    await verificationUtils.elementIsVisible(components.side_panel_icon_expand, "Side-Panel: Expand icon");

  });

  /**
   * Test case: [Side-Panel] Link: About. Validate that User is able to navigate to official website using About link.
   * @tags {regression}
   */
  test('[Side-Panel] Link: About. Validate that User is able to navigate to official website using About link. @regression', async ({ page }) => {

    // Open Side-Panel
    const components = new Components(page);    
    await components.click_side_panel_icon_expand();

    // Click About Link
    await components.click_side_panel_link_about();

    // Verify Page URL and Title
    await verificationUtils.pageHasTitle(page, 'Sauce Labs: Cross Browser Testing, Selenium Testing & Mobile Testing');
    await verificationUtils.pageHasUrl(page, 'https://saucelabs.com/');

  });


});