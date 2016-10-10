'use strict';

// Declare app level module which depends on views, and components

function toDoController(TaskListService) {
    var self = this;

    // Functions for manipulating task lists
    self.taskLists = function() {
        return TaskListService.taskLists();
    };
    console.log('self.taskLists = ' + self.taskLists());
    console.log('Length of self.taskLists is ' +
                self.taskLists().length);
    // Set tasklist to first list by default
    self.taskList = self.taskLists()[0];
    self.addTask = function(taskContent) {
        self.taskList.add(taskContent);
        self.taskInput = '';
    };
    self.removeTask = function(task) {
        self.taskList.remove(task);
    };
    self.toggleComplete = function(task) {
        TaskListService.toggleComplete(task);
    };


    // Sorting tasks
    self.sortType = 'created';
    self.sortReverse = false;
    // Filtering tasks
    self.taskFilter = {};
    self.clearFilter = function() {
        delete self.taskFilter.complete;
    };
}


angular.module('todo').
    component('todoComponent', {
        templateUrl: 'todo/todo.template.html',
        controller: ['TaskListService', toDoController,
        ]   
    });

