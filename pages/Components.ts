import { Page, Locator } from '@playwright/test';

/**
 * Components class represents common UI components 
 * like header, footer, and side-panel elements in the application.
 */
class Components {
    
    private page: Page;
    private header_logo_swag_labs: Locator;
    private footer_msg_copyright: Locator;
    private footer_link_linkedin: Locator;

    // Elements

    /**
     * Initializes locators for common components on the page.
     * @param page - The Playwright Page instance.
     */
    constructor(page: Page) {
        this.page = page;

        // Header
        this.header_logo_swag_labs = page.locator('.app_logo');

        // Footer
        this.footer_msg_copyright = page.locator('.footer_copy');
        this.footer_link_linkedin = page.getByRole('link', { name: 'LinkedIn' });

        // Side-Panel (No elements yet)
    }

    // Operations/Methods

    // Header
    /**
     * Returns the locator for the Swag Labs logo in the header.
     * @returns Locator for the header logo element.
     */
    get_header_logo_swag_labs(): Locator {
        return this.header_logo_swag_labs;
    }

    // Footer
     /**
     * Returns the locator for the footer copyright message.
     * @returns Locator for the footer message element.
     */
    get_footer_msg_copyright(): Locator {
        return this.footer_msg_copyright;
    }

    /**
     * Returns the locator for the LinkedIn link in the footer.
     * @returns Locator for the LinkedIn link element.
     */
    get_footer_link_linkedin(): Locator {
        return this.footer_link_linkedin;
    }

    // Side-Panel (No methods yet)
}

/**
 * Exports the Components class as the default export of this module.
 * @module Components
 */
export default Components;
