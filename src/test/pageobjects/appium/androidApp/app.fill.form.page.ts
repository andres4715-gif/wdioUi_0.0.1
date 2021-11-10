import Gestures from '../../../helpers/gestures'
import { WDIOType } from '../../../../../config/types/types'
var expect = require('chai').expect;
var assert = require('chai').assert;

const SELECTORS: WDIOType = {
    FORMS_MENU: '//*[@content-desc= "Forms"]',
    LABEL_FORM_COMPONENTS: '//*[@text = "Form components"]',
    INPUT_FIELD: '//*[@class = "android.widget.EditText"]',
    DROPDWN_CLICK_OPTION: '//*[@content-desc= "select-Dropdown"]',
    DROP_DOWN_FIRST_OPTION: '//*[@resource-id = "android:id/select_dialog_listview"]',
    BUTTON_ACTIVE: '//*[@text= "Active"]',
    TEXT_THIS_BUTTON_IS: '//*[@text = "This button is"]',
    TEXT_THIS_BUTTON_IS_ACTIVE: '//*[@text = "This button is active"]',
    TEXT_ASKME_LATER: '//*[@text = "ASK ME LATER"]',
    TEXT_CANCEL: '//*[@text = "CANCEL"]',
    TEXT_OK: '//*[@text = "OK"]',
};

class FillFormPage {

    get formsMenu () {
        return $(SELECTORS.FORMS_MENU);
    }

    get labelFormComponents () {
        return $(SELECTORS.LABEL_FORM_COMPONENTS);
    }

    get inputField () {
        return $(SELECTORS.INPUT_FIELD);
    }

    get clickDropDown () {
        return $(SELECTORS.DROPDWN_CLICK_OPTION);
    }

    get dropdown () {
        return $(SELECTORS.DROP_DOWN_FIRST_OPTION);
    }

    get activeButton () {
        return $(SELECTORS.BUTTON_ACTIVE);
    }

    get thisButtonIs () {
        return $(SELECTORS.TEXT_THIS_BUTTON_IS)
    }

    get thisButtonIsActive () {
        return $(SELECTORS.TEXT_THIS_BUTTON_IS_ACTIVE)
    }

    get askMeLater () {
        return $(SELECTORS.TEXT_ASKME_LATER)
    }

    get cancel () {
        return $(SELECTORS.TEXT_CANCEL)
    }

    get ok () {
        return $(SELECTORS.TEXT_OK)
    }

    clickFormsMenuOption() {
        this.formsMenu.click();
    }

    checkLabelFormComponents () {
        this.labelFormComponents.isDisplayed();
    }

    imputDataFiel (data: string) {
        this.inputField.setValue(data);
    }

    doClickDropDown () {
        this.clickDropDown.click();
    }

    selectDropDownOption () {
        this.dropdown.click();
        driver.pause(2000);
    }

    clickButtonActive () {
        Gestures.swipeUp(0.5)
        this.activeButton.waitForDisplayed({ timeout: 3000 });
        this.activeButton.click();
    }

    checkPopUpActiveButton () {
        this.thisButtonIs.isDisplayed();
        this.thisButtonIsActive.isDisplayed();
        this.askMeLater.isDisplayed();
        this.cancel.isDisplayed();
        this.ok.isDisplayed();
    }

    clickOk () {
        this.ok.click();
    }
}
export default new FillFormPage();
