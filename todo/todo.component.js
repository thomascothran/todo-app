'use strict';

// Declare app level module which depends on views, and components

function toDoController() {
    const self = this;
    self.taskDisplayList = [];
    self.taskInput = "And another";
    self.taskDisplayList.push(
        new Task(self.taskInput)
    );
    self.addTask = function(task) {
        self.taskDisplayList.push(new Task(task));
    };
}


angular.module('todo').
    component('todoComponent', {
        templateUrl: 'todo/todo.template.html',
        controller: toDoController,
    });

