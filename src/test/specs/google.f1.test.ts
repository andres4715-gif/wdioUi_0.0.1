import  F1 from '.././pageobjects/google.f1.page'
import  F1Results from '.././pageobjects/google.f1.results.page'

describe('Take a screenshot for a web page', () => {
    it('should be able to open a browser window', () => {
        F1.openGoogle();
        F1.typeResearch();
    });

    it('should be able interact with elemets', () => {
        F1Results.clickF1Results();
        F1Results.takeScreenshot();
    });

    it('should be able to take a screeshot', () => {
        F1Results.takeScreenshot();
        browser.pause(1000);
    });
})
