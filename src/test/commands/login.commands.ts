import LoginPage from '../pageobjects/robot.login.page';

// If the user has expired you can create a new account  in this web page: https://online.roboform.com/site/signup
class robotLoginCommand {
    openAndLoginPage() {
        LoginPage.openUrl();
        LoginPage.inputCredentials(
            'nazlyavilachica@gmail.com',
            'aquenoloadivines123*')
    }
}

export default new robotLoginCommand();
