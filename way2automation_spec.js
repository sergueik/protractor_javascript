describe('Protractor practice website - Banking App', function() {
  var customerLogin = element(by.buttonText('Customer Login'));
  var customerLogin2 = element(by.xpath("//button[contains(.,'Customer Login')]"));
  var customerId = element(by.model("custId"));

  beforeEach(function() {
	browser.driver.manage().window().maximize();
    browser.get('http://www.way2automation.com/angularjs-protractor/banking');
  });

  it('should land on Protractor practice website - Banking App', function() {
    expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
  });

  it('should find the Customer Login via regular Selenium locator', function() {
    expect(customerLogin2.isDisplayed()).toBeTruthy();
    expect(customerLogin2.getText()).toEqual( "Customer Login");
  });

  it('should find the Customer Login via Protractor Button Text', function() {
    expect(customerLogin.isDisplayed()).toBeTruthy();
    expect(customerLogin.getText()).toEqual( 'Customer Login');
  });

  it('should offer the Customer ID to Login', function() {
    customerLogin2.click();
    expect(customerId.isDisplayed()).toBeTruthy();
  });

});
