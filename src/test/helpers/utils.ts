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
