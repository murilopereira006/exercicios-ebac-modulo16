const {join} = require('path')

exports.config = {
    hostname: 'localhost',
    runner: 'local',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    capabilities: [{
        platformName: 'Android',
        platformVersion: '11.0',
        deviceName: 'Pixel 3 API 30',
        app: join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2'
    }],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
