'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', []).
    component('testComponent', {
        template: 'This is a test',
        controller: function testController() {
            this.testString = 'This is another test(string).';
        }
    });
