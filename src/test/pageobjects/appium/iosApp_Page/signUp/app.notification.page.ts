import { WDIOType } from '../../../../../../config/types/types'

var expect = require('chai').expect;
var assert = require('chai').assert;

const SELECTORS: WDIOType = {
    CELLPHONE_IMAGE: '//*[@name="notifications_benefits"]',
    MESSAGE_DONT_MISS_ANY_OFFER: "//*[@name='DON'T MISS ANY VALUABLE OFFER']",
    MAYBE_LATER: '//*[@name="MAYBE LATER"]',
    DONT_ALLOW_BUTTON: "//*[@name='Don’t Allow']",
    OK_BUTTON: '//*[@name="OK"]',
};

class Notification  {

    get cellphoneImage () {
        return $(SELECTORS.CELLPHONE_IMAGE);
    }

    get messageAnyOffer () {
        return $(SELECTORS.MESSAGE_DONT_MISS_ANY_OFFER);
    }

    get maybeLaterButton () {
        return $(SELECTORS.MAYBE_LATER);
    }

    get dontAllowButton () {
        return $(SELECTORS.DONT_ALLOW_BUTTON);
    }

    get okButton () {
        return $(SELECTORS.OK_BUTTON);
    }

    checkCellPhoneImage() {
        this.cellphoneImage.isDisplayed();
    }

    checkMessageAnyOffer() {
        this.messageAnyOffer.isDisplayed();
    }

    clickMaybeLaterButton() {
        this.maybeLaterButton.click();
    }

    clickDontAllowModal () {
        this.dontAllowButton.click();
    }

    clickOkButtonModal () {
        this.okButton.click();
    }
}

export default new Notification();
