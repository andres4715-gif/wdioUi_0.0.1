// const { join } = require('path');
const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
    'src/test/specs/appium/iosApp/app.wdio.login.ios.spec.ts',
    // 'src/test/specs/appium/iosApp/app.wdio.signIn.ios.spec.ts',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        path: '/wd/hub',
        // The defaults you need to have in your config
        platformName: 'iOS',
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        'appium:deviceName': 'iPhone 12 Pro Max',
        'appium:platformVersion': '14.5',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'XCUITest',
        // The path to the app
        'appium:app': '/Users/andresrios/Documents/AndresRios/AutomationGuild/guildzemogawebdriverio/apps/Archive.zip',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        'appium:noReset': false,
        'appium:newCommandTimeout': 1000,
    },
];

exports.config = config;
