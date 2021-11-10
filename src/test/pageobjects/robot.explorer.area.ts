import { WDIOType } from '../../../config/types/types'

const SELECTORS: WDIOType = {
    CREATE_FOLDER: '[class="crfolder top-border"]',
    NEW_FOLDER: '//*[@id="fileTreeInner"]/ul/li/a/span',
    CHECK_CONFIRMATION_MODAL: '#crfolderTreeFolders',
    IMPUT_FOLDER_NAME: '#crfolderWidget > div > div > div.modal-body.message > div._crfolderBody > input',
    BUTTON_OK: '#crfolderWidget > div > div > div.modal-footer > button:first-child',
    DELETE_FOLDER: '#right-menu > li:nth-child(7) > a > span.menuitem.screen-lg',
    CONFIRMATION_MODAL: '#confirm_delete_widget > div > div',
    CONFIRM_DELETE: '#confirm_delete_widget > div > div > div.modal-footer > button:first-child',
    LOG_OUT: '[class="btn btn-warning navbar-btn"]',
    LOGIN_PAGE: '(//*[contains(text(),"Log In")])[2]',
    ROBOT_FORM_IMAGE_LOGIN_PAGE: '//*[@class="sm-screen"]',
}

/**
 * page containing specific selectors and methods for a specific page
 */
class ExplorerArea {
    get createFolder () {
        return $(SELECTORS.CREATE_FOLDER);
    }

    get newFolder () {
        return $(SELECTORS.NEW_FOLDER);
    }

    get checkConfirmationModal () {
        return $(SELECTORS.CHECK_CONFIRMATION_MODAL)
    }

    get inputFolderName () {
        return $(SELECTORS.IMPUT_FOLDER_NAME)
    }
    get buttonOk () {
        return $(SELECTORS.BUTTON_OK)
    }

    get deleteFolder () {
        return $(SELECTORS.DELETE_FOLDER)
    }

    get confirmatioModal () {
        return $(SELECTORS.CONFIRMATION_MODAL)
    }

    get confirmDelete () {
        return $(SELECTORS.CONFIRM_DELETE)
    }

    get logOut () {
        return $(SELECTORS.LOG_OUT)
    }

    get loginPage () {
        return $(SELECTORS.LOGIN_PAGE);
    }

    get robotFormHomePageImage () {
        return $(SELECTORS.ROBOT_FORM_IMAGE_LOGIN_PAGE);
    }

    /**
     * create new folder it should be able to fill with data information
     * @param folderName folder name to show on board
     */
    createNewFolder(folderName: string) {
        this.createFolder.click();
        this.checkConfirmationModal.isDisplayed();
        this.inputFolderName.waitForDisplayed({ timeout:2000 })
        this.inputFolderName.setValue(folderName);
        this.buttonOk.click();
        browser.takeScreenshot();
    }

    checkNewFolderName(){
        const folderName: any = this.newFolder.getText();
        return folderName;
    }

    checkLoginPageAgain () {
        const LoginElementText: any = this.loginPage.getText();
        return LoginElementText;
    }

    checkRobotFormHomePageImage () {
        const robotFormImage: any  = this.robotFormHomePageImage.isDisplayed();
        return robotFormImage;
    }

    /**
     * Delete folder already created on the board
     */
    deleteExistingFolder() {
        this.deleteFolder.waitForDisplayed({ timeout:2000 })
        this.deleteFolder.click();
        this.confirmatioModal.waitForDisplayed({ timeout:2000 })
        this.confirmatioModal.isDisplayed();
        this.confirmDelete.click();
    }

    /**
     * logout page after correct test
     */
    LogoutPage(){
        this.logOut.click();
        browser.pause(1000);
        browser.takeScreenshot();
    }
}

export default new ExplorerArea();
