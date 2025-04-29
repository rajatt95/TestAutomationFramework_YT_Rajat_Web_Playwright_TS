import { Locator } from '@playwright/test';

/**
 * BasePage class provides common actions that can be performed on web elements.
 */
class BasePage {

    /**
     * Clicks on a specified web element.
     * @param element - The Locator of the element to click.
     * @param elementName - A descriptive name of the element (used for logging).
     */
    async clickOnWebElement(element: Locator, elementName: string): Promise<void> {
        console.log(`Clicking on '${elementName}'.`);
        await element.click();
    }

    /**
     * Fills a textbox with the provided value.
     * @param element - The Locator of the textbox element.
     * @param value - The value/text to be entered into the textbox.
     * @param textboxName - A descriptive name of the textbox (used for logging).
     */
    async fillTextBox(element: Locator, value: string, textboxName: string): Promise<void> {
        console.log(`Filling '${value}' in '${textboxName}' textbox.`);
        await element.fill(value);
    }
}

/**
 * Exports the BasePage class as the default export of this module.
 * @module BasePage
 */
export default BasePage;