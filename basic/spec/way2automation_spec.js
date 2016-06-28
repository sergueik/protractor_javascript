'use strict';
describe('Protractor practice website - Banking App', function() {

  describe ('Banking App Customer Page', function() {
    var customerButton2 = element(by.buttonText('Customer Login'));
    var customerButton = element(by.xpath("//button[contains(.,'Customer Login')]"));
    var customerId = element(by.model('custId'));
    var customers = element.all(by.repeater('cust in Customers'));
    var loginButton = element(by.buttonText('Login'));
    var greeting = element(by.binding('user'));
    var accountNo =  element(by.binding('accountNo'));
    // You can also use a substring for a partial match
    var balance =  element(by.binding('amo'));
    var currency =  element(by.binding('currency'));

    beforeEach(function() {
      // browser.driver.manage().window().maximize();
      browser.get('http://www.way2automation.com/angularjs-protractor/banking');
      browser.waitForAngular();
    });

    it('should land on Protractor practice website - Banking App', function() {
      expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
      expect(customerButton2.isDisplayed()).toBeTruthy();
      expect(customerButton2.getText()).toEqual( 'Customer Login');
      expect(customerButton.isDisplayed()).toBeTruthy();
      expect(customerButton.getText()).toEqual( 'Customer Login');
    });

    it('should offer selectable Customer Logins', function() {
      customerButton.click().then( function() {
        expect(customerId.isDisplayed()).toBeTruthy();
        expect(customerId.getAttribute('id')).toEqual('userSelect');
        expect(customers.count()).toEqual(5);
      });
    });

    it('should greet the Logged-in Customer', function() {
      customerButton.click();
      var first_customer = customers.first();
      var userName = first_customer.getText();
      first_customer.getText().then(function(value) {
        console.log('Customer: ' + value.toString());
      });
      first_customer.click().then( function() {
        expect(loginButton.isDisplayed()).toBeTruthy();
        loginButton.click();
        expect(greeting.getText()).toEqual( userName );
        accountNo.getText().then(function(value) {
          expect(value).toMatch(/\d{4}/);
          console.log('accountNo: ' + value);
        });          
        balance.getText().then(function(value) {
          expect(value).toMatch("\\d+");
          console.log('Balance: ' + value );
        });
        currency.getText().then(function(value) {
          expect(value).toMatch(/(?:Dollar|Pound|Rupee)/);
          console.log('Currency: ' + value.toString());
        });
      });
    });
  });
});
