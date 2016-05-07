describe('Protractor practice website - Banking App', function() {
  
  describe ("Customer Login", function() {
    var customerButton = element(by.buttonText('Customer Login'));
    var customerButton2 = element(by.xpath("//button[contains(.,'Customer Login')]"));
    var customerId = element(by.model('custId'));
    var customers = element.all(by.repeater('cust in Customers'));
    var loginButton = element(by.buttonText('Login'));
    var greeting = element(by.binding('user'));
    
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
      first_customer.click();
      var userName = first_customer.getText();
      expect(loginButton.isDisplayed()).toBeTruthy();
      loginButton.click();
      expect(greeting.getText()).toEqual( userName );      
    });
  });

});
