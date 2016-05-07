'use strict';
describe('Protractor practice website - Banking App', function() {

  describe ("Customer Login", function() {
    var customerButton2 = element(by.buttonText('Customer Login'));
    var customerButton = element(by.xpath("//button[contains(.,'Customer Login')]"));
    var customerId = element(by.model('custId'));
    var customers = element.all(by.repeater('cust in Customers'));
    var loginButton = element(by.buttonText('Login'));
    var greeting = element(by.binding('user'));
    var accountNo =  element(by.binding('accountNo'));
    // You can also use a substring for a partial match
    var balance =  element(by.binding('amount'));
    var currency =  element(by.binding('currency'));
    /*
    // A Jasmine spec timed out. Resetting the WebDriver Control Flow.
    beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });
    */
    beforeEach(function() {
      browser.driver.manage().window().maximize();
      browser.get('http://www.way2automation.com/angularjs-protractor/banking');
      browser.waitForAngular();
    });

    it('should land on Protractor practice website - Banking App', function() {
      expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
    });

    it('should find the Customer Login via regular Selenium locator', function() {
      expect(customerButton2.isDisplayed()).toBeTruthy();
      expect(customerButton2.getText()).toEqual( 'Customer Login');
    });

    it('should find the Customer Login via Protractor Button Text', function() {
      expect(customerButton.isDisplayed()).toBeTruthy();
      expect(customerButton.getText()).toEqual( 'Customer Login');
    });

    it('should offer selectable Customer Logins', function() {
      customerButton.click();
      expect(customerId.isDisplayed()).toBeTruthy();
      expect(customerId.getAttribute('id')).toEqual('userSelect');
      expect(customers.count()).toEqual(5);
      });

    it('should greet the Logged-in Customer', function() {
      customerButton.click();
      var first_customer = customers.get(1);
      var userName = first_customer.getText();
      first_customer.getText().then(function(value) {
        console.log('Customer: ' + value.toString());
      });
      first_customer.click();
      expect(loginButton.isDisplayed()).toBeTruthy();
      loginButton.click();
      expect(greeting.getText()).toEqual( userName );
      expect(accountNo.getText()).toMatch(/\d{4}/);
      accountNo.getText().then(function(value) {
        console.log('accountNo: ' + value.toString());
      });
      expect(balance.getText()).toMatch("\\d+");
      balance.getText().then(function(value) {
        console.log('Balance: ' + value );
      });
      expect(currency.getText()).toMatch(/(?:Dollar|Pound|Rupee)/);
      currency.getText().then(function(value) {
        console.log('Currency: ' + value.toString());
      });
    });
  });
});
