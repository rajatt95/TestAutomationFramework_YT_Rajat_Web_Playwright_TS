import { expect, Locator } from '@playwright/test';

/**
 * Utility class for performing various verification/assertion actions on web elements.
 */
class VerificationUtils {

    /**
     * Asserts that the target element contains the expected text.
     * @param targetElement - The Locator of the element to be verified.
     * @param expectedText - The text expected to be contained within the element.
     */
    async elementContainsText(targetElement: Locator, expectedText: string): Promise<void> {
        console.log("Asserts that an element contains the expected text.");
        await expect(targetElement).toContainText(expectedText);
    }

    /**
     * Asserts that the target element's text matches the expected text exactly.
     * @param targetElement - The Locator of the element to be verified.
     * @param expectedText - The exact text expected to match.
     */
    async elementHasText(targetElement: Locator, expectedText: string): Promise<void> {
        console.log("Asserts that an element has the expected text.");
        await expect(targetElement).toHaveText(expectedText);
    }

    /**
     * Asserts that the target element is visible on the page.
     * @param targetElement - The Locator of the element to be verified.
     */
    async elementIsVisible(targetElement: Locator): Promise<void> {
        console.log("Asserts that an element is visible.");
        await expect(targetElement).toBeVisible();
    }

    /**
     * Asserts that the target element has a specific attribute with the expected value.
     * @param targetElement - The Locator of the element to be verified.
     * @param attribute - The attribute name to check.
     * @param attributeValue - The expected value of the attribute.
     */
    async elementHasAttributeAndHasValue(targetElement: Locator, attribute: string, attributeValue: string): Promise<void> {
        console.log("Asserts that an element has a specific attribute with the expected value.");
        await expect(targetElement).toHaveAttribute(attribute, attributeValue);
    }
}

/**
 * Exports the VerificationManager class as the default export of this module.
 * @module VerificationManager
 */
export default new VerificationUtils();