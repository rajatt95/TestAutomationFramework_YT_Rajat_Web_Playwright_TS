import { Page, Locator } from '@playwright/test';

// Importing the BasePage class
import BasePage from "./BasePage"

// Creating an instance of the BasePage class
const basePage = new BasePage();
/**
 * LoginPage class handles operations related to the login page of the application.
 */
class LoginPage {
    
    private page: Page;
    private textbox_username: Locator;
    private textbox_password: Locator;
    private button_login: Locator;
    private message_error_not_match: Locator;

    // Elements

    /**
     * Initializes locators for login page elements.
     * @param page - The Playwright Page instance.
     * 
     * @example
     * const loginPage = new LoginPage(page);
     * // Now you can access locators like loginPage.textbox_username
     */
    constructor(page: Page) {
        this.page = page;
        this.textbox_username = page.locator('[data-test="username"]');
        this.textbox_password = page.locator('[data-test="password"]');
        this.button_login = page.locator('[data-test="login-button"]');
        this.message_error_not_match = page.locator('xpath=//h3[contains(text(),"do not match")]');
    }

    // Operations/Methods

    /**
     * Logs into the application by filling in the username and password fields,
     * and clicking the login button.
     * @param username - Username to input.
     * @param password - Password to input.
     * 
     * @example
     * await loginPage.loginToApplication('user', 'password');
     */
    async loginToApplication(username: string, password: string): Promise<void> {
        const basePage = new BasePage();
        await basePage.fillTextBox(this.textbox_username, username, "Username")
        await basePage.fillTextBox(this.textbox_password, password, "Password")
        await basePage.clickOnWebElement(this.button_login, "Login button")
    }

    /**
     * Logs into the application using predefined valid credentials.
     * The credentials are loaded from a JSON file.
     * 
     * @example
     * await loginPage.loginToApplicationWithValidCredentials();
     */
    async loginToApplicationWithValidCredentials(): Promise<void> {

        // Loading login credentials from JSON file
        const loginCredentials = require('../test-data/login_credentials.json');  
    
        // Extracting credentials for valid case
        const { valid_username, valid_password } = loginCredentials.data.credentials_1;
        
        // Call loginToApplication with valid credentials
        await this.loginToApplication(valid_username, valid_password);
    }

    /**
     * Returns the locator for the error message displayed when login credentials do not match.
     * This message appears when invalid credentials are entered.
     * 
     * @returns {Locator} - Locator for the login error message element.
     * 
     * @example
     * const errorMessageLocator = loginPage.get_message_error_not_match();
     */
    get_message_error_not_match(): Locator {
        return this.message_error_not_match;
    }
}

/**
 * Exports the LoginPage class as the default export of this module.
 * @module LoginPage
 */
export default LoginPage;