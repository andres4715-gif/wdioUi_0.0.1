const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
    // 'src/test/specs/appium/androidApp/app.wdio.fill.form.spec.ts',
    'src/test/specs/appium/androidApp/app.wdio.createAccount.spec.ts',
    'src/test/specs/appium/androidApp/app.wdio.swipe.spec.ts',
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
        platformName: 'Android',
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
        // The path to the app
        'appium:app': '/Users/andresrios/Documents/AndresRios/AutomationGuild/guildzemogawebdriverio/apps/Android-NativeDemoApp-0.2.1.apk',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        'appium:noReset': false,
        'appium:newCommandTimeout': 1000,
    },
];

exports.config = config;
