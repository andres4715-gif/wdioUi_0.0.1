import FillForm from '.././pageobjects/yourLogo.purchase.page'
import HomePage from '.././pageobjects/yourLogo.homePage.purchase.page'
import ContactUsPage from '.././pageobjects/yourLogo.contactUs.purchase.page'

describe('Get some products to buy something', () => {
    it('should be able to open the correct web page', () => {
        FillForm.openYourLogoPage();
    });

    it('should be able open a contact us form', () => {
        HomePage.clickContactUs();
        ContactUsPage.getTitleAndCompare()
    });
})
