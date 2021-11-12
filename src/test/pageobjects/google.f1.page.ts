import OpenPagePage from './openPage.page';

const SELECTORS = {
    SEARCH: '[name="q"]'
}

/**
 * sub page containing specific selectors and methods for a specific page
 */
class F1 extends OpenPagePage {
    get search() {
        return $(SELECTORS.SEARCH);
    }

    openGoogle() {
        return super.openGoogleSearchF1Results();
    }

    typeResearch() {
        this.search.setValue('f1');
        browser.keys("\uE007");
    }
}

export default new F1();
