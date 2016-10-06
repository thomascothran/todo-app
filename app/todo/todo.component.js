'use strict';

// Declare app level module which depends on views, and components

function Task(content) {
    // A constructor function for tasks
    this.content = content;
    this.complete = false;
}

function toDoController() {
    const self = this;
    self.taskList = [];
    self.taskInput = "And another";
    self.taskList.push(
        new Task(self.taskInput)
    );
}


angular.module('todo').
    component('todoComponent', {
        templateUrl: 'todo/todo.template.html',
        controller: toDoController,
    });

