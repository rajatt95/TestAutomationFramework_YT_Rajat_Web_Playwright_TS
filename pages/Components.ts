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
    
    readonly page: Page;
    readonly header_logo_swag_labs: Locator;
    readonly header_icon_cart: Locator;
    
    readonly footer_msg_copyright: Locator;
    readonly footer_link_linkedin: Locator;
    readonly footer_link_twitter: Locator;
    readonly footer_link_facebook: Locator;

    readonly side_panel_icon_expand: Locator;
    readonly side_panel_icon_cross: Locator;
    readonly side_panel_link_allItems: Locator;
    readonly side_panel_link_about: Locator;
    readonly side_panel_link_logout: Locator;
    readonly side_panel_link_resetAppState: Locator;
    readonly side_panel_links: Locator;
    
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
        this.side_panel_link_allItems = page.locator('#inventory_sidebar_link')
        this.side_panel_link_about = page.locator('#about_sidebar_link')
        this.side_panel_link_logout = page.locator('#logout_sidebar_link')
        this.side_panel_link_resetAppState = page.locator('#reset_sidebar_link')
        this.side_panel_links = page.locator("//*[contains(@id,'sidebar_link')]")
    }

    // Operations/Methods

    // Header

    /**
     * Clicks the cart icon in the header.
     * @returns {Promise<void>} - A promise that resolves when the cart icon has been clicked.
     */
    async click_header_icon_cart(): Promise<void> {
        const basePage = new BasePage();
        await basePage.clickOnWebElement(this.header_icon_cart, "Header: Cart icon");
    }

    // Footer
    
    // Side-Panel 

    /**
     * Clicks on the expand icon in the side-panel.
     */
    async click_side_panel_icon_expand(): Promise<void> {
        await basePage.clickOnWebElement(this.side_panel_icon_expand, "Side-Panel: Expand icon");
    }

    /**
     * Clicks on the cross icon in the side-panel.
     */
    async click_side_panel_icon_cross(): Promise<void> {
        await basePage.clickOnWebElement(this.side_panel_icon_cross, "Side-Panel: Cross icon");
    }

    /**
     * Clicks on the about link in the side-panel.
     */
    async click_side_panel_link_about(): Promise<void> {
        await basePage.clickOnWebElement(this.side_panel_link_about, "Side-Panel: About link");
    }
    
}

/**
 * Exports the Components class as the default export of this module.
 * @module Components
 */
export default Components;