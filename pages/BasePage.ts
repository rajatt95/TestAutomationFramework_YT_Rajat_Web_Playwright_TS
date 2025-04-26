import { Locator } from '@playwright/test';

class BasePage {

    async clickOnWebElement(element: Locator, elementName: string): Promise<void> {
        console.log(`Clicking on '${elementName}'.`);
        await element.click();
    }

    async fillTextBox(element: Locator, value: string, textbox_name: string): Promise<void> {
        console.log(`Filling '${value}' in '${textbox_name}' textbox.`);
        await element.fill(value);
    }
}

export default BasePage;