var assert = require('chai').assert;

/**
 * Get value and compare if this is a expected text
 * @param selector
 * @param expectedText
 * @param element
 */
export function getValueAndCompareContent(selector: any, expectedText: string, element: string): void {
    let labelValue: string = '';
    labelValue = $(selector).getText();
    assert.include(labelValue, expectedText, `Check the ${element} because it was not displayed`);
}

/**
 * it is possilble to add some text and fill a field
 * @param selector
 * @param text
 */
export function inputGenericValue(selector: any, text: string): void {
    $(selector).setValue(text);
}

export function clearTextGenericValue(selector: any): void {
    $(selector).clearValue();
}

/**
 * it is possible to do a click in specific area or element
 * @param selector
 */
export function clickGenericValue(selector: any): void {
    $(selector).click();
}

/**
 * it is possilble to cleck if any element is displayed
 * @param selector
 * @param element
 */
export function checkIfElementIsDisplayedGenericElement(selector: any, element: string): void {
    let checkIfElementIsDisplayed: boolean = $(selector).isDisplayed();
    assert.isTrue(checkIfElementIsDisplayed, `Check because ${element} is not displayed`);
}

/**
 * choose any element from a list
 * @param selector
 * @param element
 */
export function chooseElementByDopDownGenericElement(selector: any, element: string): void {
    $(selector).selectByVisibleText(element);
}

/**
 * it is possilble to do a scroll to search any element
 * @param selector
 */
export function scrollIntoViewGenericElement(selector: any): void {
    $(selector).scrollIntoView();
}

/**
 * it is possilble to wait until the element is displayed
 * @param selector
 */
export function waitForDisplayedGenericElement(selector: any): void {
    $(selector).waitForDisplayed({ timeout: 5000 });
}
