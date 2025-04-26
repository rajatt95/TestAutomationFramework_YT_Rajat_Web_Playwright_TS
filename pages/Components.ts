import { Page, Locator } from '@playwright/test';

class Components {
    
    private page: Page;
    private header_logo_swag_labs: Locator;
    private footer_msg_copyright: Locator;
    private footer_link_linkedin: Locator;

    // Elements
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
    get_header_logo_swag_labs(): Locator {
        return this.header_logo_swag_labs;
    }

    // Footer
    get_footer_msg_copyright(): Locator {
        return this.footer_msg_copyright;
    }

    get_footer_link_linkedin(): Locator {
        return this.footer_link_linkedin;
    }

    // Side-Panel (No methods yet)
}

export default Components;
