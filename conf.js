
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
//  specs: ['spec/way2automation_spec.js','spec/datepicker_spec.js', 'spec/qualityshepherd_spec.js'],
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
