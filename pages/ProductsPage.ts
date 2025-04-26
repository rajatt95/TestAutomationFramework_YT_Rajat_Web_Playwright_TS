import { Page, Locator } from '@playwright/test';

/**
 * ProductsPage class handles operations related to the Products page of the application.
 */
class ProductsPage {
    
    private page: Page;
    private heading_products: Locator;

    // Elements

    /**
     * Initializes locators for the Products page elements.
     * @param page - The Playwright Page instance.
     */
    constructor(page: Page) {
        this.page = page;
        this.heading_products = page.locator('.title');
    }

    // Operations/Methods

    /**
     * Returns the locator for the Products page heading.
     * @returns Locator for the heading element on the Products page.
     */
    get_heading_products(): Locator {
        return this.heading_products;
    }
}

/**
 * Exports the ProductsPage class as the default export of this module.
 * @module ProductsPage
 */
export default ProductsPage;