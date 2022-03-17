exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../tests/new-card-spec.js'],
    baseUrl: 'https://www.payback.at/',
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
       args: [ "--headless", "--disable-gpu", "--window-size=1920,1080" ]
       }
    }
  }