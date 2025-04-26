import { Page, Locator } from '@playwright/test';

class ProductsPage {
    
    private page: Page;
    private heading_products: Locator;

    // Elements
    constructor(page: Page) {
        this.page = page;
        this.heading_products = page.locator('.title');
    }

    // Operations/Methods
    get_heading_products(): Locator {
        return this.heading_products;
    }
}

export default ProductsPage;