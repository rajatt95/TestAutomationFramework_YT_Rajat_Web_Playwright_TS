import { Page, Locator } from '@playwright/test';

class LoginPage {
    
    private page: Page;
    private textbox_username: Locator;
    private textbox_password: Locator;
    private button_login: Locator;
    private message_error_not_match: Locator;

    // Elements
    constructor(page: Page) {
        this.page = page;
        this.textbox_username = page.locator('[data-test="username"]');
        this.textbox_password = page.locator('[data-test="password"]');
        this.button_login = page.locator('[data-test="login-button"]');
        this.message_error_not_match = page.locator('xpath=//h3[contains(text(),"do not match")]');
    }

    // Operations/Methods
    async loginToApplication(username: string, password: string): Promise<void> {
        console.log(`Filling ${username} in Username textBox`);
        await this.textbox_username.fill(username);

        console.log(`Filling ${password} in Password textBox`);
        await this.textbox_password.fill(password);

        console.log('Clicking on Login button');
        await this.button_login.click();
    }

    get_message_error_not_match(): Locator {
        return this.message_error_not_match;
    }
}

export default LoginPage;