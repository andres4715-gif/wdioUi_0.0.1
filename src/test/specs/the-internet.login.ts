import TheInternetLoginPage from '.././pageobjects/the-internet.login.page'

var assert = require('chai').assert;

describe('Login with incorrect and valid user', () => {
    it('should be able to type incorrect credentials on the web page', () => {
        // FillRoboForm.openInternetLoginPage();
        browser.url('https://the-internet.herokuapp.com/login')
        TheInternetLoginPage.inputUserNameEntry('0000001');
        TheInternetLoginPage.inputPasswordEntry('XXXXXXX');
        TheInternetLoginPage.clickSubmit();
        assert.include(TheInternetLoginPage.getTextRedMessage(), 'Your username is invalid!');
    });

    it('should be able to type a valid credentials on the web page', () => {
        TheInternetLoginPage.inputUserNameEntry('tomsmith');
        TheInternetLoginPage.inputPasswordEntry('SuperSecretPassword!');
        TheInternetLoginPage.clickSubmit();
        assert.include(TheInternetLoginPage.getTextRedMessage(), 'You logged into a secure area!');
        browser.pause(3000);
    });
})
