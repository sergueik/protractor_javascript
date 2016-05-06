describe('Protractor Demo For Thomas Cook site', function() {
  var departureCityOverlay = element(by.css('#SearchbarForm-originContainer div.SearchbarForm-summary'));
  var departureCity = element(by.id('SearchbarForm-origin'));
  var departureCityOverlay = element(by.css('#SearchbarForm-originContainer div.SearchbarForm-summary'));
  var departureDate = element(by.id('when'));
  var arrivalCity = element(by.id('SearchbarForm-goingTo'));
  var arrivalCityOverlay = element(by.css('#SearchbarForm-destinationContainer div.SearchbarForm-summary'));
  var searchButton = element(by.id('SearchbarForm-submitBtn'));
  var searchResult = element(by.css('div.searchResultPanel'));

  beforeEach(function() {
	browser.driver.manage().window().maximize();
    browser.get('https://www.thomascook.com/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Thomas Cook | Package Holidays, Hotels and Flights, Cheap holidays');
  });

  it('should search from New York to Las Vegas', function() {
	arrivalCityOverlay.click();
    arrivalCity.sendKeys("Dundee, Scotland");
	departureCityOverlay.click();
    departureCity.sendKeys("London City");
	
    searchButton.click();

    expect(searchResult.isDisplayed()).toBeTruthy();
  });

});
