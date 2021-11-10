# Webdriverio Automation

- [Node >=8.10.0](https://nodejs.org/en/)
- [Webdriverio](https://webdriver.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prettier Vscode](https://prettier.io/)

# Install

1. Install nvm ([unix](https://github.com/creationix/nvm)/[windows](https://github.com/coreybutler/nvm-windows)))
2. Install node:
```sh
$ nvm install 8.10.0
$ nvm use 8.10.0
```

5. Clone and install dependencies
```sh
$ git clone https://github.com/andres4715-gif/wdioUi_0.0.1.git
$ npm install
```
# [VS Code](https://code.visualstudio.com/) recommended plugins and config

* [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
* [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

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
Supported browsers: chrome and firefox


## Chrome: `MAC`:

* The next command line runs some test cases added on this file wdio.conf.ts in specs section

```shell
$ npm run chrome
```
# Configure browsers:

Firefox | Required Configuration
### Firefox: `MAC`:

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
