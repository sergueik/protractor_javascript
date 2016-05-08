var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  seleniumServerJar: "$APPDATA/npm/node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar",
  specs: ['spec/*_spec.js'],
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 2
  },
  onPrepare: function(){
    browser.manage().timeouts().implicitlyWait(5000);
    browser.manage().window().setSize(700, 500);
 },
}
