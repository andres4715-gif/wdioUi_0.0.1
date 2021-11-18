import FillRoboForm from '../pageobjects/robot.form.page';
import allureReporter from '@wdio/allure-reporter'

describe('Interact with elements on the web page', () => {
    // $$
    it('should can interact getting an element from a list', () => {
        FillRoboForm.open();
        FillRoboForm.getElemetFromList();
    });

    it('should clear a value', () => {
        browser.takeScreenshot();
        allureReporter.addSeverity('critical')
        // FillRoboForm.checkClearValues('Doctor');
        FillRoboForm.setTitleRoboForm('Engineer');
        FillRoboForm.clearTitleValue();
        FillRoboForm.clickFullName();
        FillRoboForm.checkIfBuyNowButtonIsDisplayed();
        FillRoboForm.chooseCarExpirationDateMonth('12');
        FillRoboForm.selectCreditCardType('American Express');
        driver.pause(3000);
        FillRoboForm.scrollEnglishButton();
        driver.pause(3000);
        FillRoboForm.waitUntilTheEnglishButtonIsDisplayed();
    });
})
