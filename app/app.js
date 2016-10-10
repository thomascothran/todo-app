'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'todo',
    'list-manager',
]).controller('MainCtrl', [function() {
    var self = this;
    self.tab = 'tasks';
    self.open = function(tab) {
        self.tab = tab;
    };
}]);
    

