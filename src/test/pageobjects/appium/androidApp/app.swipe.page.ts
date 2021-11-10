import Gestures from '../../../helpers/gestures'
import { WDIOType } from '../../../../../config/types/types'
let expect = require('chai').expect;


const SELECTORS: WDIOType = {
    WEB_VIEW_MENU: '//*[@text="WebView"]',
    SEARCH: '//*[@text="Search"]',
    NEW_SEARCH: '//*[@resource-id="docsearch-input"]',
    FIRST_OPTION: '//*[@resource-id="docsearch-item-0"]',
    CLICK: '//*[@text="click"]'
};

class SwipePage {

    get webViewMenu () {
        return $(SELECTORS.WEB_VIEW_MENU);
    }

    get buttonSearch () {
        return $(SELECTORS.SEARCH);
    }

    get doNewSearch () {
        return $(SELECTORS.NEW_SEARCH);
    }

    get lookFirstOption () {
        return $(SELECTORS.FIRST_OPTION);
    }

    get waitForResults () {
        return $(SELECTORS.CLICK);
    }

    clickWebMenu () {
        this.webViewMenu.click();
    }

    clickButtonSearch () {
        this.buttonSearch.click();
    }

    imputNewSearch (elementAction: string) {
        this.doNewSearch.setValue(elementAction);;
    }

    clickFirstOption () {
        this.lookFirstOption.click();
        this.waitForResults.isDisplayed();
        expect(this.waitForResults
            .getText()).to.equal
        ('click');
    }

    scrollUp(intertaction: number) {
        var i;
        for (i = 0; i < intertaction; i++) {
            Gestures.swipeUp(1);
        }
        driver.pause(2000);
    }
}

export default new SwipePage();
