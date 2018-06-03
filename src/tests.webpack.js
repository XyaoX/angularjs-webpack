// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

import 'angular';
import 'angular-mocks/angular-mocks';
const context = require.context('./app', true, /\.js$/);

context.keys().forEach(context);

function normalizeData(jsonIn) {
    var data = JSON.parse(jsonIn);
    return {
        name: data.Name,
        id: data.PersonalIdentifier
    };
}


describe("normalisszeData", function () {
    // The 'it' function of Jasmine defined an individual test. The first argument is
    // a description of the test that's appended to the module name. Because a module name
    // is typically a noun, like the name of the function being tested, the description for
    // an individual test is typically written in an action-data format.

    it("accepts golden path data", function () {
        // Invoke the unit being tested as necessary
        var json = '{"Name": "Maria", "PersonalIdentifier": 2111858}';
        var norm = normalizeData(json);

        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(norm.name).toEqual("Maria");
        expect(norm.id).toEqual(2111858);
    });

});


describe('homecontrol',function(){
    beforeEach(angular.mock.module('app'));
    var $controller;
    beforeEach(angular.mock.inject(function(_$controller_){
        $controller = _$controller_;
    }));
    describe('click',function(){
        it('should return helo',function(){
            var scope = {}; 
            var homeCtrl = $controller('homeCtrl');
            expect(homeCtrl.onClick()).toBe('hello');
            
        })
    })
})