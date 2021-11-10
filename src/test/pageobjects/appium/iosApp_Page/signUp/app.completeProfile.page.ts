import { WDIOType } from '../../../../../../config/types/types'

var expect = require('chai').expect;
var assert = require('chai').assert;

const SELECTORS: WDIOType = {
    CONTACT_INFORMATION_LABEL: '//*[@name="CONTACT INFORMATION"]',
    COMPLETE_PROFILE_FIRST_NAME: '//*[@name="ui.form.name.given"]',
    COMPLETE_PROFILE_LAST_NAME: '//*[@name="ui.form.name.family"]',
    COMPLETE_PROFILE_PHONE_NUMBER: '//*[@name="ui.form.phone"]',
    SAVE_INFORMATION_BUTTON: '//*[@name="SAVE INFORMATION"]',
};

const firstName: string = 'webDriverIO';
const lastName: string = 'webDriverIO';
const phoneNumber: number = 1234567890;

class CompleteProfile  {

    get inputFirstName () {
        return $(SELECTORS.COMPLETE_PROFILE_FIRST_NAME);
    }

    get inputLastName () {
        return $(SELECTORS.COMPLETE_PROFILE_LAST_NAME);
    }

    get inputPhoneNumber () {
        return $(SELECTORS.COMPLETE_PROFILE_PHONE_NUMBER);
    }

    get contactInformationLabel () {
        return $(SELECTORS.CONTACT_INFORMATION_LABEL);
    }

    get SaveInformationButton () {
        return $(SELECTORS.SAVE_INFORMATION_BUTTON);
    }

    inputContacInformationFirstName() {
        this.inputFirstName.setValue(firstName);
    }

    inputContactInformationLastName() {
        this.inputLastName.setValue(lastName);
    }

    inputContactInformationPhoneNumber() {
        this.inputPhoneNumber.setValue(phoneNumber);
    }

    clickSaveInformationButton () {
        this.contactInformationLabel.click();
        this.SaveInformationButton.click();
        driver.pause(6000);
    }
}
export default new CompleteProfile();
