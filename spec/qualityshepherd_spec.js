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
    // http://stackoverflow.com/questions/34320148/how-can-i-inspect-the-contents-of-a-dropdown-list-with-protractor?lq=1
    it('should add a friend', function() {  
      var friendNamesArray = element.all(by.repeater('row in rows').column('{{row}}')).map(function(row) {
        return row.getText();
      });
      friendNamesArray.then(function(value) {
        expect(value.length).toEqual(3);
        var lengthCheck = value.length;
        // console.log('Length Check(in) : ' + lengthCheck );
        var newFriendName = 'George';
        addnameBox.sendKeys(newFriendName);
        addButton.click().then( function() {
          expect(friends.count()).toEqual(lengthCheck + 1); 
        });
      });
    
      var newFriendName = 'Ringo';
      addnameBox.sendKeys(newFriendName);
      addButton.click().then( function() {
        var last_friend = friendNames.last();
        last_friend.getText().then(function(value) {
          console.log('Last Friend : ' + value.toString());
        });
      });
      
      var friendNamesString = element.all(by.repeater('row in rows').column('{{row}}')).map(function(row) {
        return row.getText();
      }).then(function(arr) {
        return arr.reduce(function(a, b) {
          return a.toString() + '=' + b.toString();
        })
      });
      friendNamesString.then(function(value) {
        expect(value.split(/=/).length).toEqual(5);
      });
    });
  });
});
