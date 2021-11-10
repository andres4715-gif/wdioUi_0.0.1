import { WDIOType } from '../../../../../config/types/types'

var expect = require('chai').expect;
var assert = require('chai').assert;

const SELECTORS: WDIOType = {
    CLICK_SIGN_UP: '//*[@name="ui.welcome.signup.cta"]',
};

class AccountScreen {

    get signUpApp () {
        return $(SELECTORS.CLICK_SIGN_UP);
    }

    clickSignUpHomePage() {
        this.signUpApp.click();
    }
}
export default new AccountScreen();
