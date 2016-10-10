'use strict';

function listManagerComponent(TaskListService) {
    var self = this;
    self.test = 'This is a test';
}

angular.module('list-manager')
    .component('listManagerComponent', {
        templateUrl: 'list-manager/list-manager.template.html',
        controller: ['TaskListService', listManagerComponent]
    }
);
