import FillRoboForm from '../pageobjects/robot.form.page';
import allureReporter from '@wdio/allure-reporter'

describe('Interact with elements on the web page', () => {
    // $$
    it('should can interact getting an element from a list', () => {
        FillRoboForm.open();
        FillRoboForm.getElemetFromList();
    });

    it('should Take a screenshot', () => {
        browser.takeScreenshot();
        allureReporter.addSeverity('critical')
    });

    it('should be able to setup a text', () => {
        FillRoboForm.setTitleRoboForm('Engineer');
    });

    it('should be able to clear a value', () => {
        FillRoboForm.clearTitleValue();
    });

    it('should be able to do a click on the web page', () => {
        FillRoboForm.clickFullName();
    });

    it('should be able to check if a element is displayed', () => {
        FillRoboForm.checkIfBuyNowButtonIsDisplayed();
    });

    it('should be able to clear a value', () => {
        FillRoboForm.checkIfBuyNowButtonIsDisplayed();
    });

    it('should be able to choose any element from a list', () => {
        FillRoboForm.chooseCarExpirationDateMonth('12');
        FillRoboForm.selectCreditCardType('American Express');
        driver.pause(3000);
    });

    it('should be able to do scroll to search any element', () => {
        FillRoboForm.scrollEnglishButton();
        driver.pause(3000);
        FillRoboForm.waitUntilTheEnglishButtonIsDisplayed();
    });

    it('should be able to do wait until any element is visible', () => {
        FillRoboForm.waitUntilTheEnglishButtonIsDisplayed();
    });
})
