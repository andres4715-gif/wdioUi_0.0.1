/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class OpenPagePage {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    open(path: string) {
        return browser.url(`https://www.roboform.com/${path}`);
    }

    openYourLogoPage() {
        return browser.url('http://automationpractice.com/index.php');
    }

    openGoogleSearchF1Results() {
        return browser.url('https://www.google.com/');
    }
}

export default OpenPagePage;
