import LoginCommands from '../commands/login.commands';
import ExploresArea from '../pageobjects/robot.explorer.area.page';

let expect = require('chai').expect;

describe('Create a new folder, delete this folder and log out on the web page', () => {
    it('Should be able to log in in the web page', () => {
        LoginCommands.openAndLoginPage();
    })

    it('Should be able to create a new folder on the board', () => {
        ExploresArea.createNewFolder('webdriverio');
        const newNameFolder: string = ExploresArea.checkNewFolderName();
        expect(newNameFolder).to.equal('webdriverio');
    })

    it('Should be able to delete a new folder on the board', () => {
        ExploresArea.deleteExistingFolder();
        ExploresArea.LogoutPage();
        const checkLoginPage: string = ExploresArea.checkLoginPageAgain();
        expect(checkLoginPage).to.equal('Log In');
        expect(ExploresArea.checkRobotFormHomePageImage()).to.equal(true);
    })
})
