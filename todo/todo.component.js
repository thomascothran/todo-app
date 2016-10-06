'use strict';

// Declare app level module which depends on views, and components
angular.module('todo').
    component('testComponent', {
        templateUrl: 'todo/todo.template.html',
        controller: function testController() {
            this.testString = 'This is another test(string).';
        }
    });

