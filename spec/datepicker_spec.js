'use strict';
describe('Protractor Datepicker Page', function() {
    // origin: https://github.com/badrisugavanam/protractor-angulardatePicker

    var moment = require('moment');
    var dateTimePicker = function(parentnode, nthnode, dateofthemonth, timeoftheday, specifictimeofthehour, relativetime, resultinputbox) {

        parentnode.click();
        var i = 0;
        // select the n-th date picker example 
        element.all(by.cssContainingText('td', dateofthemonth)).each(function(date) {
            i = i + 1;
            if (i == nthnode) {
                date.click();
            }

        });
        //hour of the day 
        element.all(by.cssContainingText('span', timeoftheday)).each(function(time) {

            time.click();
        });
        //specific time of the hour
        element.all(by.cssContainingText('span', specifictimeofthehour)).each(function(specifictime) {

            specifictime.click();
        });

        return (resultinputbox.getAttribute('value'));

    };
    beforeEach(function() {
        browser.get('http://dalelotts.github.io/angular-bootstrap-datetimepicker/');
        browser.waitForAngular();
    });

    it('The text box contains August 12 6:30 PM ', function() {

        var parentnode = element(by.css('.input-group-addon'));
        var nthnode = 3;
        var dateofthemonth = '12';
        var timeoftheday = '6:00 PM';
        var specifictimeofthehour = '6:30 PM';
        var resultinputbox = element(by.model('data.dateDropDownInput'));
        var relativetime;
        dateTimePicker(parentnode, nthnode, dateofthemonth, timeoftheday, specifictimeofthehour, relativetime, resultinputbox).then(function(result) {
            console.log(result);
        });
    });
});