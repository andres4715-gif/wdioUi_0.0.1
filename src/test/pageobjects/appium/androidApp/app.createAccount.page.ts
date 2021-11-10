import { Emailrandom } from '../../../helpers/utils';
import { WDIOType } from '../../../../../config/types/types'
var expect = require('chai').expect;
var assert = require('chai').assert;

const SELECTORS: WDIOType = {

    CLICK_LOGIN: '//android.view.ViewGroup[@content-desc="Login"]',
    CHOOSE_SIGN_UP: '//android.view.ViewGroup[@content-desc="button-sign-up-container"]',
    NAME: '//*[@content-desc = "input-email"]',
    PASSWORD: '//*[@content-desc = "input-password"]',
    CONFIRM_PASSWORD: '//*[@content-desc = "input-repeat-password"]',
    CLICK_SIGN_UP: '//*[@content-desc = "button-SIGN UP"]',
    CKECK_SUCCESS_ACCOUNT: '//*[@resource-id= "android:id/message"]',
    OK_BUTTON: '//*[@resource-id="android:id/button1"]',
    LOGIN_OPTION: '(//*[@text ="Login"])[1]',
    LOGIN_BUTTON: '//*[@text = "LOGIN"]',
    WRON_PASWORD: '//*[@content-desc="input-password"]',
    VALID_EMAIL_MESSAGE: '//*[@text="Please enter a valid email address"]',
    LOGGED_IN_SUCCESS: '//*[@text="You are logged in!"]'
};

class CreateAccount {

    get loginApp () {
        return $(SELECTORS.CLICK_LOGIN);
    }
    get buttonSignUp () {
        return $(SELECTORS.CHOOSE_SIGN_UP);
    }
    get imputEmail () {
        return $(SELECTORS.NAME);
    }
    get pass () {
        return $(SELECTORS.PASSWORD);
    }
    get ConfirmPass () {
        return $(SELECTORS.CONFIRM_PASSWORD);
    }
    get signUpLogin () {
        return $(SELECTORS.CLICK_SIGN_UP);
    }
    get checkNewWebDriverAccount () {
        return $(SELECTORS.CKECK_SUCCESS_ACCOUNT);
    }
    get clickOkButton () {
        return $(SELECTORS.OK_BUTTON);
    }
    get loginOption () {
        return $(SELECTORS.LOGIN_OPTION);
    }

    get loginButton () {
        return $(SELECTORS.LOGIN_BUTTON);
    }

    get wrongPassword () {
        return $(SELECTORS.WRON_PASWORD);
    }

    get getImputValidEmailMessage () {
        return $(SELECTORS.VALID_EMAIL_MESSAGE);
    }

    get MessageSuccessLogin () {
        return $(SELECTORS.LOGGED_IN_SUCCESS)
    }


    clickLoginHomePage() {
        this.loginApp.click();
    }

    clickSignUpButton() {
        this.buttonSignUp.click();
    }

    imputEmailAddress () {
        this.imputEmail.setValue(Emailrandom(1, 1000))
    }

    imputPassword(password: string) {
        this.pass.setValue(password);
    }

    imputConfirmPass(confirmPassword: string) {
        this.ConfirmPass.setValue(confirmPassword)
    }

    clickSingUpLogin () {
        this.signUpLogin.click();
        driver.pause(2000);
    }

    checkSuccessMessageAccount () {
        expect(this.checkNewWebDriverAccount
            .getText()).to.equal
        ('You successfully signed up!');
        if(this.clickOkButton.isDisplayed()){
            this.clickOkButton.click();
        }
    }

    clickLoginButtonMenu () {
        this.loginOption.click();
    }

    imputWrongEmail(wromgEmail: string) {
        this.imputEmail.setValue(wromgEmail);
    }

    imputValidEmail(wromgEmail: string) {
        this.imputEmail.setValue(wromgEmail);
    }

    imputWrongPassword(wrongPassword2: string) {
        this.wrongPassword.clearValue();
        this.wrongPassword.setValue(wrongPassword2);
    }

    clickLoginButton() {
        this.loginButton.click();
    }

    checkValidEmailMessage () {
        this.getImputValidEmailMessage.getText();
        expect(this.getImputValidEmailMessage
            .getText()).to.equal
        ('Please enter a valid email address');
        driver.pause(3000);
    }

    checkMessageSuccessLogin () {
        this.MessageSuccessLogin.getText();
        expect(this.MessageSuccessLogin
            .getText()).to.equal
        ('You are logged in!');
    }
}

export default new CreateAccount();
