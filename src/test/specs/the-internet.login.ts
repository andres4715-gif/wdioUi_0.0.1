import TheInternetLoginPage from '.././pageobjects/the-internet.login.page'

var assert = require('chai').assert;

let validUsername: string = 'tomsmith';
let invalidUsername: string = '0000001';
let valiPassword: string = 'SuperSecretPassword!';
let invaliPassword: string = 'XXXXXXX';

describe('Login with incorrect and valid user', () => {
    it('should be able to type incorrect credentials on the page', () => {
        browser.url('https://the-internet.herokuapp.com/login');
        TheInternetLoginPage.inputUserNameEntry(invalidUsername);
        TheInternetLoginPage.inputPasswordEntry(invaliPassword);
        TheInternetLoginPage.clickSubmit();
        assert.include(TheInternetLoginPage.getTextRedMessage(), 'Your username is invalid!', 'issue getting a wrong message');
    });

    it('should be able to type a valid credentials on the web page', () => {
        TheInternetLoginPage.inputUserNameEntry(validUsername);
        TheInternetLoginPage.inputPasswordEntry(valiPassword);
        TheInternetLoginPage.clickSubmit();
        assert.include(TheInternetLoginPage.getTextRedMessage(), 'You logged into a secure area!', 'Is not possible to get text for valid credential message');
        browser.pause(3000);
    });
})
