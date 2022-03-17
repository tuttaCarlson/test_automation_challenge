# How to use:
- `git clone https://github.com/tuttaCarlson/test_automation_challenge`
- `cd test_automation_challenge`
- `npm install` to install npm
- `npm install protractor` to install protractor 
- `./node_modules/protractor/bin/webdriver-manager update` to download the necessary binaries
- ` (./node_modules/protractor/bin/webdriver-manager start &>/dev/null </dev/null)&` to start up a server
- `./node_modules/protractor/bin/protractor config/de-conf.js` to run tests in chrome
- `./node_modules/protractor/bin/protractor config/de-conf-headless.js` to run tests in headless chrome
