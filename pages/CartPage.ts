import { Page, Locator } from '@playwright/test';

/**
 * CartPage class handles operations related to the Cart page of the application.
 */
class CartPage {
    
    // Elements
    private page: Page;
    readonly heading_your_cart: Locator;

    /**
     * Initializes the CartPage instance with page elements.
     * @param {Page} page - The Playwright page object.
     */
    constructor(page: Page) {
        this.page = page;
        this.heading_your_cart = page.locator('.title');
    }

    // Operations/Methods

}

/**
 * Exports the CartPage class as the default export of this module.
 * @module CartPage
 */
export default CartPage;