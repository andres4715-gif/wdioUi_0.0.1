import FillForm from '.././pageobjects/yourLogo.purchase.page'

var assert = require('chai').assert;

describe('Login with incorrect and valid user', () => {
    it('should be able to type incorrect credentials on the page', () => {
        FillForm.openYourLogoPage();
    });
})
