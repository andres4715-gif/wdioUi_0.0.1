const SELECTORS = {
    WIKIPEDIA: '[class="ruhjFe NJLBac fl"]',
    PAGE_INFORMATION: '[class="client-js ve-available"]'
}

/**
 * sub page containing specific selectors and methods for a specific page
 */
class F1Results {

    get wikipedia() {
        return $(SELECTORS.WIKIPEDIA);
    }

    get pageInformation() {
        return $(SELECTORS.PAGE_INFORMATION);
    }

    clickF1Results() {
       this.wikipedia.click();
    }

    takeScreenshot() {
        this.pageInformation.saveScreenshot('src/screenShots/elemScreenshot.png');
    }
}

export default new F1Results();
