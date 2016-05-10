'use strict';
describe('Protractor practice website - Friends Page', function() {

  describe ('Friends Page', function() {
    
    var searchBox = element(by.model('search'));
    var addnameBox = element(by.model('addName'));
    var addButton = element(by.buttonText('+ add'));
    var actualCount = $('em.ng-binding');
    var deleteButton = $('i.icon-trash');
    var deleteButtons = $$('i.icon-trash');
    var friendName = function(name) { return element.all(by.cssContainingText('td.ng-binding', name)); };
    var friends = element.all(by.repeater('row in rows'));
    var friendNames = element.all(by.repeater('row in rows').column('{{row}}'));
    
    beforeEach(function() {
      browser.get('http://qualityshepherd.com/angular/friends/');
      browser.waitForAngular();
    });

    // http://stackoverflow.com/questions/34320148/how-can-i-inspect-the-contents-of-a-dropdown-list-with-protractor?lq=1
    // http://stackoverflow.com/questions/22806379/angularjs-protractor-sum-all-row-values-in-repeater
    it('should add a friend', function() {
      friends.then(function(rows) {
        var friendsCount = rows.length;
        var newFriendName = 'George';
        addnameBox.sendKeys(newFriendName);
        addButton.click().then( function() {
          expect(friends.count()).toEqual(friendsCount + 1); 
        });
      });
    
      var newFriendName = 'Ringo';
      addnameBox.sendKeys(newFriendName);
      addButton.click().then( function() {
        friendNames.last().getText().then(function(value) {
          console.log('Last Friend Name: ' + value );
        });
      });
    });
  });
});