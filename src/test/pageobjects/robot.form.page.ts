import RobotPage from './robot.page';

const SELECTORS = {
    IMPUT_TITLE: '[name="01___title"]',
    ELEMENT: '.newfoot',
    FOR_BUSINESS: '#qflist > li:nth-child(3) > a',
    CHECK_LABEL_TO_ALL_FIELDS: '[class="mcs text-center"]',
    BUSINESS_ACTIVE_LOGO: '[class="landing_head-logo"]',
    BUY_NOW: '//*[@id="dlbtn"]',
    FACEBOOK_LOGO: '[class="lcsprite f_off"]',
    INPUT_ADDRESS: '[name="10address1"]',
    INPUT_ADDRESS_2: '//*[@name="11address2"]',
    INPUT_CITY: '//*[@name="13adr_city"]',
}

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FillForm extends RobotPage {
    /**
     * define selectors using getter methods
     */
    get inputTitle() {
        return $(SELECTORS.IMPUT_TITLE);
    }

    get element() {
        return $(SELECTORS.ELEMENT);
    }

    get forBusiness() {
        return $(SELECTORS.FOR_BUSINESS);
    }

    get checkLabelToAllFields() {
        return $(SELECTORS.CHECK_LABEL_TO_ALL_FIELDS);
    }

    get businessActiveLogo() {
        return $(SELECTORS.BUSINESS_ACTIVE_LOGO);
    }

    get buyNow() {
        return $(SELECTORS.BUY_NOW);
    }

    get facebookLogo() {
        return $(SELECTORS.FACEBOOK_LOGO);
    }

    get inputAddress() {
        return $(SELECTORS.INPUT_ADDRESS);
    }

    get inputAddress2() {
        return $(SELECTORS.INPUT_ADDRESS_2);
    }

    get inputCity() {
        return $(SELECTORS.INPUT_CITY);
    }

    /**
     * Fill personal data
     */
    imputData(setTitle: string) {
        this.inputTitle.setValue(setTitle);
        browser.pause(2000);
    }

    checkSetValue(address: string, address2: string, city: string) {
        this.inputAddress.setValue(address);
        this.inputAddress2.setValue(address2);
        this.inputCity.setValue(city);
        browser.pause(2000);
    }

    /**
     * $$ -> This element  works to get an element from a list
     */
    getElemetFromList() {
        const text = this.element;
        const printValue = text.$$('li')[3].$('a').getText();
        console.log(`** ${printValue}`);
    }

    /**
     * Clear a <textarea> or text <input> element’s value.
     * @param setTitle
     */
    checkClearValues(setTitle: string) {
        this.inputTitle.setValue(setTitle);
        browser.pause(1000);
        this.inputTitle.clearValue();
        browser.pause(1000);
    }

    /**
     * click, it is for a valid element in the Dom that it is clickable
     * @param setTitle
     */
    checkClick(setTitle: string) {
        this.inputTitle.setValue(setTitle);
        this.forBusiness.click();
        this.businessActiveLogo.waitForDisplayed({timeout: 6000});
        browser.back();
        this.inputTitle.waitForDisplayed({timeout: 6000});
        this.checkLabelToAllFields.isDisplayed();
        browser.pause(1000);
    }

    /**
     * element clickable, it is to check if any element in the Dom is clickable to redirect for another page
     */
    checkIfElementIsClickable() {
        const checkElement = this.forBusiness.isClickable();
        console.log(checkElement);
        if (checkElement === true) {
            console.log(`This element ${checkElement} is clickable`);
        } else {
            console.log(`check because this element ${checkElement} is not a clickable element`);
        }
    }

    /**
     * .isDisplayedInViewport() the selected DOM-element found by given selector is partially visible and within the viewport.
     */
    checkIsDisplayedInViewport() {
        const BuyNowButton = this.buyNow.isDisplayedInViewport();
        console.log(`buy now button is present on the page? = ${BuyNowButton}`);
    }

    /**
     * .isEnable: Return true or false if the selected DOM-element is enabled.
     */
    checkIsEnable() {
        const checkFacebookLogo = this.facebookLogo.isEnabled();
        console.log(`Facebook logo is present on the page? = ${checkFacebookLogo}`);
    }

    /**
     * .isExisting: Returns true if element exists in the DOM
     */
    checkIsExisting() {
        const checkFacebookLogo = this.facebookLogo.isExisting();
        console.log(`Facebook logo exits on the page? = ${checkFacebookLogo}`);
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('filling-test-all-fields');
    }
}

export default new FillForm();
