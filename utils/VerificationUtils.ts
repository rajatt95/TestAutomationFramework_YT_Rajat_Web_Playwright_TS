import { expect, Locator, Page } from '@playwright/test';

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
        console.log(`Asserts that an element contains the expected text '${expectedText}'.`)
        await expect(targetElement).toContainText(expectedText);
    }

    /**
     * Asserts that the target element's text matches the expected text exactly.
     * @param targetElement - The Locator of the element to be verified.
     * @param expectedText - The exact text expected to match.
     */
    async elementHasText(targetElement: Locator, expectedText: string): Promise<void> {
        console.log(`Asserts that an element has the expected text '${expectedText}'.`)
        await expect(targetElement).toHaveText(expectedText);
    }

    /**
     * Asserts that the specified element is visible on the page.
     * @param targetElement - The Locator of the element to be verified.
     * @param targetElementName - A descriptive name of the element for logging purposes.
     */
    async elementIsVisible(targetElement: Locator, targetElementName: string): Promise<void> {
        console.log(`Asserts that '${targetElementName}' is visible.`)
        await expect(targetElement).toBeVisible();
    }

    /**
     * Asserts that the specified element is not visible on the page.
     * @param targetElement - The Locator of the element to be verified.
     * @param targetElementName - A descriptive name of the element for logging purposes.
     */
     async elementIsNotVisible(targetElement: Locator, targetElementName: string): Promise<void> {
        console.log(`Asserts that '${targetElementName}' is not visible.`)
        await expect(targetElement).toBeHidden();
    }

    /**
     * Asserts that the target element has a specific attribute with the expected value.
     * @param targetElement - The Locator of the element to be verified.
     * @param targetElementName - A descriptive name of the element for logging purposes.
     * @param attribute - The attribute name to check.
     * @param attributeValue - The expected value of the attribute.
     */
    async elementHasAttributeAndHasValue(targetElement: Locator, targetElementName: string, attribute: string, attributeValue: string): Promise<void> {
        console.log(`Asserts that '${targetElementName}' has a specific attribute '${attribute}' with the expected value '${attributeValue}'.`)
        await expect(targetElement).toHaveAttribute(attribute, attributeValue);
    }

    /**
     * Asserts that the current page URL contains the expected substring.
     * @param page - The Playwright page object.
     * @param expectedUrl - The substring to check for in the page URL.
     */
    async pageContainsUrl(page: Page, expectedUrl: string): Promise<void> {    
        const currentPageUrl = await page.url();      
        console.log(`Asserts that the current page URL '${currentPageUrl}' contains the expected substring '${expectedUrl}'.`)
        expect(currentPageUrl).toContain(expectedUrl);
    }

    /**
     * Asserts that the current page URL matches the expected URL.
     * @param page - The Playwright page object.
     * @param expectedUrl - The expected URL to match.
     */
    async pageHasUrl(page: Page, expectedUrl: string): Promise<void> {
        console.log(`Asserts that the current page URL matches the expected substring '${expectedUrl}'.`)
        await expect(page).toHaveURL(expectedUrl);
    }

    /**
     * Asserts that the current page Title contains the expected substring.
     * @param page - The Playwright page object.
     * @param expectedTitle - The substring to check for in the page title.
     */
    async pageContainsTitle(page: Page, expectedTitle: string): Promise<void> {    
        const currentPageTitle = await page.title();    
        console.log(`Asserts that the current page Title '${currentPageTitle}' contains the expected substring '${expectedTitle}'.`)
        expect(currentPageTitle).toContain(expectedTitle);
    }

    /**
     * Asserts that the current page Title matches the expected title.
     * @param page - The Playwright page object.
     * @param expectedTitle - The expected title to match.
     */
    async pageHasTitle(page: Page, expectedTitle: string): Promise<void> {        
        console.log(`Asserts that the current page Title matches the expected substring '${expectedTitle}'.`)
        await expect(page).toHaveTitle(expectedTitle);
    }

    /**
     * Asserts that the number of elements matching the locator equals the expected count.
     *
     * @param targetElement - The locator for the target elements.
     * @param targetElementName - A friendly name for logging purposes.
     * @param expectedCount - The expected number of elements.
     */
     async elementsCount(targetElement: Locator, targetElementName: string, expectedCount: number): Promise<void> {
        if (expectedCount === 1) {
            console.log(`Asserts that ${expectedCount} '${targetElementName}' is visible.`);
        } else {
            console.log(`Asserts that ${expectedCount} '${targetElementName}' are visible.`);
        }

        await expect(targetElement).toHaveCount(expectedCount);
    }

    /**
     * Asserts that an element has a specific CSS property with the expected value.
     *
     * @param {Locator} targetElement - The target element to check.
     * @param {string} targetElementName - The name or identifier of the target element.
     * @param {string} property - The CSS property to check.
     * @param {string} propertyValue - The expected value of the CSS property.
     */ 
    async elementHasCSSPropertyAndHasValue(targetElement: Locator, targetElementName: string, property: string, propertyValue: string): Promise<void> {
        console.log(`Asserts that '${targetElementName}' has a specific CSS property '${property}' with the expected value '${propertyValue}'.`)
        await expect(targetElement).toHaveCSS(property, propertyValue);
    }
}


/**
 * Exports the VerificationUtils class as the default export of this module.
 * @module VerificationUtils
 */
export default new VerificationUtils();