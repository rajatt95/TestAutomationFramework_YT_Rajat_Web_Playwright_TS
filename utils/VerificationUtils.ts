import { expect, Locator } from '@playwright/test';

class VerificationUtils {

    async elementContainsText(targetElement: Locator, expectedText: string): Promise<void> {
        console.log("Asserts that an element contains the expected text.");
        await expect(targetElement).toContainText(expectedText);
    }

    async elementHasText(targetElement: Locator, expectedText: string): Promise<void> {
        console.log("Asserts that an element has the expected text.");
        await expect(targetElement).toHaveText(expectedText);
    }

    async elementIsVisible(targetElement: Locator): Promise<void> {
        console.log("Asserts that an element is visible.");
        await expect(targetElement).toBeVisible();
    }

    async elementHasAttributeAndHasValue(targetElement: Locator, attribute: string, attributeValue: string): Promise<void> {
        console.log("Asserts that an element has a specific attribute with the expected value.");
        await expect(targetElement).toHaveAttribute(attribute, attributeValue);
    }
}

export default new VerificationUtils();