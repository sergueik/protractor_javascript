exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: ['thomascook_spec.js'],
  capabilities: {
    'browserName': 'firefox'
  }
}
