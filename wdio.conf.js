export const config = {
    runner: 'local',

    specs: ['./test/specs/**/*.js'],

    maxInstances: 5,

    capabilities: [{
        browserName: 'chrome'
    }],

    logLevel: 'info',

    baseUrl: 'https://www.saucedemo.com',

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: async () => {
        const { expect } = await import('expect-webdriverio');
        global.expect = expect;
    }
};