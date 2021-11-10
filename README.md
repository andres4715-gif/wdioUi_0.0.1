# Webdriverio Automation UI and mobile

- [Node >=8.10.0](https://nodejs.org/en/)
- [Webdriverio](https://webdriver.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/)

# Install

1. Install nvm ([unix](https://github.com/creationix/nvm)/[windows](https://github.com/coreybutler/nvm-windows)))
2. Install node:
```sh
$ nvm install 8.10.0
$ nvm use 8.10.0
```
3. Install appium desktop: [appium](https://github.com/appium/appium-desktop/releases/tag/v1.20.2)
4. Install appium doctor: [appium doctor](https://www.npmjs.com/package/appium-doctor)

5. Clone and install dependencies
```sh
$ git clone https://andres_rios@bitbucket.org/andres_rios/guildzemogawebdriverio.git
$ npm install
```
# [VS Code](https://code.visualstudio.com/) recommended plugins and config

* [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
* [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


# Environment Variables

* Set your `NODE_ENV` variable before running:
* If need help about envrironment variables setup, you can check this [page](https://programmerclick.com/article/7567562542/)
```sh
$ nano ~/.bash_profile
```
```
e.g. Environment Variables

echo export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_291.jdk/Contents/Home >> ~/.zshenv
echo export ANDROID_HOME=/Users/andresrios/Library/Android/sdk>> ~/.zshenv
echo export ANDROID_SDK_ROOT=/Users/andresrios/Library/Android/sdk >> ~/.zshenv
echo export PATH=$PATH/:/Users/andresrios/Library/Android/sdk/platform-tools/adb:$PATH>> ~/.zshenv
echo export PATH=${JAVA_HOME}/bin>> ~/.zshenv
echo export PATH=$PATH/:$ANDROID_HOME/platform-tools:$PATH>> ~/.zshenv
echo export PATH=$PATH/:$ANDROID_HOME/build-tools/30.0.3:$PATH>> ~/.zshenv
echo export PATH=$PATH/:$ANDROID_HOME/tools:$PATH >> ~/.zshenv
```

**NOTE**: To finish the process don't forget after this setup copy this command line in the current terminal
```shell
$ source ~/.bash_profile
```
If you have any trouble you can check more information [here](https://apple.stackexchange.com/questions/106778/how-do-i-set-environment-variables-on-os-x)

### In a new terminal after this setup you can check if you are ready!!

```shell 
$ echo $JAVA_HOME
```
```
/Library/Java/JavaVirtualMachines/jdk1.8.0_271.jdk/Contents/Home
```

```shell 
$ echo $ANDROID_HOME
```
```
/Users/arios/Library/Android/sdk
```

# Run tests


Install dependencies:

```bash
$ npm install
```

Compile TypeScript:

```bash
npm run build:watch
```

## Getting started:
Supported browsers: chrome, firefox, safari


## Chrome: `MAC`:

* The next command line runs some test cases added on this file wdio.conf.ts in specs section

```shell
$ npm run chrome
```
# Configure browsers:

Firefox | Required Configuration
### Firefox: `MAC`:

You can check this step by step: 

[Zemoga confluence](https://zemoga.jira.com/wiki/spaces/ZTEC/pages/2125300443/How+to+install+and+run+using+geckodriver+firefox)

In a new terminal point on the project folder just paste this command line:

```shell
$ curl -L https://github.com/mozilla/geckodriver/releases/download/v0.24.0/geckodriver-v0.24.0-macos.tar.gz | tar xz
```


How to run:
In a new terminal point to you geckodriver path copy this
```shell
$ ./drivers/geckodriver
```

```shell
$ npm run firefox
```
### Safari: `MAC`:
Safari | Required Configuration

You can check this step by step:

[Zemoga confluence](https://zemoga.jira.com/wiki/spaces/ZTEC/pages/2125300542/Run+test+cases+on+safari)
```shell
$ safaridriver -p 4444
```
```shell
$ npm run safari
```
### Android Browser: `Emulator`:
* Check this setup:
```shell
$ adb devices
```
You need to see something like this:

```shell
List of devices attached
941X1YE63	device
```

You can check this step by step:

[Zemoga confluence](https://zemoga.jira.com/wiki/spaces/ZTEC/pages/2126284676/Run+Android+Browser)

`Open Appium Desktop and run the server`
```shell
$ npm run appium.android
```
### Android emulator: `apk`:
`Open Appium Desktop and run the server`
```shell
$ npm run appium.android.app
```

* APPIUM Android capabilities:
```json5
{
  "platformName": "Android",
  "platformVersion": "9.0",
  "deviceName": "Pixel3API28",
  "automationName": "UiAutomator2",
  "app": "/Users/arios/Documents/AndresRios/goals/newWebDriverio/apps/Android-NativeDemoApp-0.2.1.apk"
}
```
### iOS: Simulator:
```shell
$ npm run appium.ios.app
```
* To download the appium test app
[Appium app](https://github.com/appium/ios-test-app/find/master)

* APPIUM ios capabilities:
  
```json5
{
  "platformName": "iOS",
  "platformVersion": "14.4",
  "deviceName": "iPhone 12 Pro Max",
  "automationName": "XCUITest",
  "app": "/Users/arios/Documents/AndresRios/goals/newWebDriverio/apps/Archive.zip"
}
```

### NOTE: Detected problem for ios mapping with Appium Desktop:

Using appium Desktop to do mapping on iOS simulator you can get a problem 
mapping elements because this tool can't point to the element on the ios app
correctly, because of that you will need to setup your iOS simulator. 

1. Open Xcode
2. Open your simulator
3. In the menu tap option choose `Window`
4. Choose Physical Size
5. Try again to map elements with `Appium Desktop`

# Allure Report: 

- After any test case execution, you can make an Allure report with this simple
steps: 
  
1. Execute any test case (e.g)
   ```shell
   $ npm run chrome
   ```
2. Check a new folder was created in this path: ``./reports``
3. Execute this command line: 
```shell
$ allure generate reports/allure/allure-results/ --clean && allure open
```
- You can check more information about Allure report in this confluence page:
[Zemoga Confluence page](https://zemoga.jira.com/wiki/spaces/ZTEC/pages/edit-v2/2126317669)
  


# I am checking the best way to execute test cases using The android browser

For more information I can search information in this page: [here](https://appium.io/docs/en/writing-running-appium/web/chromedriver/#when-installing-the-server)

### To run the chromeDriver: 
```shell
$ appium --chromedriver-executable drivers/chromedriver
```
In another terminal you can run this command line: 

```shell
$ npm run appium.android
```
