const SELECTORS = {
    GREEN_LOGGED_SECURE_AREA: '#flash',
    INPUT_USER_NAME: '#username',
    INPUT_PASSWORD: '#password',
    SUBMIT: '.radius'
}

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TheInternetLoginPage {
    /**
     * define selectors using getter methods
     */
    get greenLoggedSecureArea() {
        return $(SELECTORS.GREEN_LOGGED_SECURE_AREA)
    }

    get inputUserName() {
        return $(SELECTORS.INPUT_USER_NAME)
    }

    get inputPassword() {
        return $(SELECTORS.INPUT_PASSWORD)
    }

    get submit() {
        return $(SELECTORS.SUBMIT)
    }

    inputUserNameEntry(username: string) {
        this.inputUserName.setValue(username);
    }

    inputPasswordEntry(password: string) {
        this.inputPassword.setValue(password);
    }

    clickSubmit() {
        this.submit.click();
    }

    getTextRedMessage() {
        let hola = this.greenLoggedSecureArea.getText();
        return hola;
    }
}

export default new TheInternetLoginPage();
