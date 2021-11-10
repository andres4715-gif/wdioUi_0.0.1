const SELECTORS = {
    ANDROID: {
        TEXT: '*//android.widget.TextView',
        TEXT_FIELD: '*//android.widget.EditText',
    },
    IOS: {
        GENERIC_TEXT: null,
        TEXT_ELEMENT: '-ios predicate string:type == \'XCUIElementTypeStaticText\'',
    },
};

/**
 * Get the text of an element (including all child elements)
 *
 * @param {element} element
 * @param {boolean} isXpath
 *
 * @return {string}
 */

export function getTextOfElement (element: any, isXpath = false) {
    let visualText;

    try {
        if (driver.isAndroid) {
            visualText = element.$$(SELECTORS.ANDROID.TEXT).reduce((currentValue: any, el: any) => `${currentValue} ${el.getText()}`, '');
        } else {
            const iosElement = isXpath ? element.$$(SELECTORS.IOS.TEXT_ELEMENT) : element;

            if (isXpath) {
                visualText = element.$$(SELECTORS.IOS.TEXT_ELEMENT).reduce((currentValue: any, el: any) => `${currentValue} ${el.getText()}`, '');
            } else {
                visualText = iosElement.getText();
            }
        }
    } catch (e) {
        visualText = element.getText();
    }

    return visualText.trim();
}

/**
 * Get the time difference in seconds
 *
 * @param {number} start    the time in milliseconds
 * @param {number} end      the time in milliseconds
 */
export function timeDifference (start: number, end: number) {
    const elapsed = (end - start) / 1000;
    console.log('elapsed = ', elapsed, ' seconds');
}

export function Emailrandom (min: number, max: number) {
    const random = min + Math.floor((max - min) * Math.random());
    return ('wdioauto' + random + '@zemoga.com');
}
