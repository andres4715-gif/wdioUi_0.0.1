import { Emailrandom } from '../../../../helpers/utils';
import  { PASSWORD2 }  from '../../../../helpers/constans';
import { WDIOType } from '../../../../../../config/types/types'
var expect = require('chai').expect;
var assert = require('chai').assert;

const SELECTORS: WDIOType = {
    CREATE_ACCOUNT_LABEL: '//*[@name="CREATE ACCOUNT"]',
    CREATE_ACCOUNT_EMAIL: '//*[@name="ui.form.email"]',
    CREATE_ACCOUNT_PASSWORD: '//*[@name="ui.form.password"]',
    CREATE_ACCOUNT_BUTTON: '//*[@name="ui.signUp.firstStep.cta"]',
};

const CONSTANS = {
    Password: PASSWORD2,
}

class SignUP  {

    get inputCreateAccountEmailApp () {
        return $(SELECTORS.CREATE_ACCOUNT_EMAIL);
    }

    get inputCreateAccountPasswordApp () {
        return $(SELECTORS.CREATE_ACCOUNT_PASSWORD);
    }

    get CreateMyAccountButton () {
        return $(SELECTORS.CREATE_ACCOUNT_BUTTON);
    }

    get CreateAccountLabel () {
        return $(SELECTORS.CREATE_ACCOUNT_LABEL);
    }

    inputCreateAccountEmail() {
        const emailRandom: string = Emailrandom(1, 1000);
        this.inputCreateAccountEmailApp.setValue(emailRandom);
        return emailRandom;
    }

    inputCreateAccountPassword() {
        this.inputCreateAccountPasswordApp.setValue(CONSTANS.Password);
    }

    clickCreateAccountButton () {
        this.CreateAccountLabel.click();
        this.CreateMyAccountButton.click();
    }
}
export default new SignUP();
