import Robot from './robot';
import { WDIOType } from '../../../config/types/types'

const SELECTORS: WDIOType = {
    INPUT_USER_NAME: '#username',
    INPUT_PASSWORD: '#password',
    UNCHECK_REMEMBER_THIS_DEVICE: '#safe_device',
    CLICK_LOGIN: '#login_form > div:nth-child(7) > button',
}

/**
 * sub page containing specific selectors and methods for a specific page
 */
class robotLogin extends Robot {
    /**
     * define selectors using getter methods
     */
    get inputUserName () {
        return $(SELECTORS.INPUT_USER_NAME)
    }
    get inputPassword () {
        return $(SELECTORS.INPUT_PASSWORD)
    }
    get unCheckRemenberThisDevice () {
        return $(SELECTORS.UNCHECK_REMEMBER_THIS_DEVICE)
    }
    get clickLogin () {
        return $(SELECTORS.CLICK_LOGIN);
    }

    /**
     * open base url
     */
    openUrl () {
        return browser.url(`https://online.roboform.com/login`)
    }

    /**
     * imput valid credentials in this page
     * @param userName input valid user name 
     * @param userPassword input valid password for this user name
     */
    inputCredentials (userName: string, userPassword: string) {
        this.inputUserName.waitForDisplayed({ timeout: 4000 });
        this.inputUserName.setValue(userName);
        this.inputPassword.setValue(userPassword);
        this.checkRememberThisDevice();
        this.clickLogin.click();
    }

    checkRememberThisDevice () {
        const cheking: any = this.unCheckRemenberThisDevice.isDisplayed();
        if (cheking == true) {
            cheking.click();
        }
    }
}

export default new robotLogin();
