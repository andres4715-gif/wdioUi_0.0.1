const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
   // './test/specs/**/*.ts'
   'src/test/specs/appium/androidBrowser/**/*.ts',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities

config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        browserName: 'chrome',
        path: '/wd/hub',
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        'appium:deviceName': 'Pixel 4 XL API 30',
        'appium:platformVersion': '11',
        'appium:orientation': 'PORTRAIT',
        // `automationName` will be mandatory, see
        // https://github.com/appium/appium/releases/tag/v1.13.0
        'appium:automationName': 'UiAutomator2',
        'appium:newCommandTimeout': 1000,

        'goog:chromeOptions': {
            w3c: false,
            // Add this option to prevent the annoying "Welcome"-message
            args: ['--no-first-run'],
        },
    },
];

exports.config = config;
