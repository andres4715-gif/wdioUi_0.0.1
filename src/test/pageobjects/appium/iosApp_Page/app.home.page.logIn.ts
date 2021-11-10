import  { VALID_USER, PASSWORD2 }  from '../../../helpers/constans';
import { WDIOType } from '../../../../../config/types/types'

var expect = require('chai').expect;
var assert = require('chai').assert;

const SELECTORS: WDIOType = {
    SKIP_HOME_PAGE_BUTTON: '//*[@name="ui.skip.cta"]',
    MENU_MORE: '//*[@name="MORE"]',
    LOGIN_MORE_PAGE: '//*[@name="LOG IN"]',
    EMAIL_LOGIN_PAGE: '//*[@name="ui.form.email"]',
    PASSWORD_LOGIN_PAGE: '//*[@name="ui.form.password"]',
    LOGIN_LOGIN_PAGE: '//XCUIElementTypeButton[@name="LOG IN"]',
    WELCOME_BACK: '//*[@name="WELCOME BACK!"]',
};

const CONSTANS = {
    validUser: VALID_USER,
    password: PASSWORD2,
}

class LoginHomePage {

    get skipHomePageButtonApp () {
        return $(SELECTORS.SKIP_HOME_PAGE_BUTTON);
    }

    get emailLoginPage () {
        return $(SELECTORS.EMAIL_LOGIN_PAGE);
    }

    get menuMore () {
        return $(SELECTORS.MENU_MORE);
    }

    get loginMorePage () {
        return $(SELECTORS.LOGIN_MORE_PAGE);
    }

    get passwordLoginPage () {
        return $(SELECTORS.PASSWORD_LOGIN_PAGE);
    }

    get loginLoginPage () {
        return $(SELECTORS.LOGIN_LOGIN_PAGE);
    }

    get welcomeBack () {
        return $(SELECTORS.WELCOME_BACK);
    }

    clickSkipHomePage() {
        this.skipHomePageButtonApp.click();
    }

    clickMenuMore() {
        this.menuMore.click();
    }

    clickLoginMorePage() {
        this.loginMorePage.click();
    }

    inputEmailLoginPage () {
        this.emailLoginPage.setValue(CONSTANS.validUser)
    }

    inputPasswordLoginPage () {
        this.passwordLoginPage.setValue(CONSTANS.password)
    }

    clickWelcomeBack () {
        this.welcomeBack.click();
    }

    clickLoginLoginPage () {
        this.loginLoginPage.click();
    }
}

export default new LoginHomePage();
