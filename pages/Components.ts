import { Page, Locator } from '@playwright/test';

// Importing the BasePage class
import BasePage from "./BasePage"

// Creating an instance of the BasePage class
const basePage = new BasePage();

/**
 * Components class represents common UI components 
 * like header, footer, and side-panel elements in the application.
 */
class Components {
    
    private page: Page;
    private header_logo_swag_labs: Locator;
    private header_icon_cart: Locator;
    
    private footer_msg_copyright: Locator;
    private footer_link_linkedin: Locator;
    private footer_link_twitter: Locator;
    private footer_link_facebook: Locator;

    private side_panel_icon_expand: Locator;
    private side_panel_icon_cross: Locator;
    
    // Elements

    /**
     * Initializes locators for common components on the page.
     * @param page - The Playwright Page instance.
     */
    constructor(page: Page) {
        this.page = page;

        // Header
        this.header_logo_swag_labs = page.locator('.app_logo');
        this.header_icon_cart = page.locator('#shopping_cart_container')

        // Footer
        this.footer_msg_copyright = page.locator('.footer_copy');
        this.footer_link_linkedin = page.getByRole('link', { name: 'LinkedIn' });
        this.footer_link_twitter = page.getByRole('link', { name: 'Twitter' })
        this.footer_link_facebook = page.getByRole('link', { name: 'Facebook' })

        // Side-Panel
        this.side_panel_icon_expand = page.locator('#react-burger-menu-btn')
        this.side_panel_icon_cross = page.locator('#react-burger-cross-btn')

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

    /**
     * Returns the locator for the cart icon in the header.
     * @returns {Locator} - Locator for the cart icon element.
     */
    get_header_icon_cart(): Locator {
        return this.header_icon_cart;
    }

    /**
     * Clicks the cart icon in the header.
     * @returns {Promise<void>} - A promise that resolves when the cart icon has been clicked.
     */
    async click_header_icon_cart(): Promise<void> {
        const basePage = new BasePage();
        await basePage.clickOnWebElement(this.header_icon_cart, "Header: Cart icon");
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

    /**
     * Returns the locator for the Twitter link in the footer.
     * @returns Locator for the Twitter link element.
     */
    get_footer_link_twitter(): Locator {
        return this.footer_link_twitter;
    }

    /**
     * Returns the locator for the Facebook link in the footer.
     * @returns Locator for the Facebook link element.
     */
    get_footer_link_facebook(): Locator {
        return this.footer_link_facebook;
    }
    
    // Side-Panel 

    /**
     * Returns the locator for the side-panel expand icon.
     * @returns {Locator} - Locator for the side-panel expand icon element.
     */
    get_side_panel_icon_expand(): Locator{
        return this.side_panel_icon_expand;
    }

}

/**
 * Exports the Components class as the default export of this module.
 * @module Components
 */
export default Components;