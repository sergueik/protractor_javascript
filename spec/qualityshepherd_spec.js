
'use strict';
describe('Protractor practice website - Friends Page', function() {

  describe ('Friends Page', function() {
    
    var searchBox = element(by.model('search'));
    var addnameBox = element(by.model('addName'));
    var addButton = element(by.buttonText('+ add'));
    var actualCount = $('em.ng-binding');
    var deleteButton = $('i.icon-trash');
    var deleteButtons = $$('i.icon-trash');
    var friendName = function(text) { return element.all(by.cssContainingText('td.ng-binding', text)); };
    var friends = element.all(by.repeater('row in rows'));
    var friendNames = element.all(by.repeater('row in rows').column('{{row}}'));
    

    beforeEach(function() {
      // browser.driver.manage().window().maximize();
      browser.get('http://qualityshepherd.com/angular/friends/');
      browser.waitForAngular();
    });

    it('should add a friend', function() {
      
      var friendName = 'Harry Potter';      
      var countFriends = function(){
        friends.count().then(function(value){
          console.log('*returning ' + value);
          return value;
        });
      };
      var friendCount = countFriends();
      console.log('Friend Count (before): ' + friendCount);

      addnameBox.sendKeys(friendName);
      addButton.click().then( function() {
        var last_friend = friendNames.last();
        last_friend.getText().then(function(value) {
          console.log('Last Friend : ' + value.toString());
        });
        // var newFriendCount = countFriends();
        // expect(newFriendCount).toEqual(friendCount + 1);
      });
    });
  });
});
