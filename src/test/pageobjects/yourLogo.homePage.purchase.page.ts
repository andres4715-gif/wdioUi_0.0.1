const SELECTORS = {
    CONTACT_US: '[title="Contact Us"]'
}

class HomePage {
    get contactUs() {
        return $(SELECTORS.CONTACT_US);
    }

    clickContactUs() {
        this.contactUs.click();
    }
}

export default new HomePage();
