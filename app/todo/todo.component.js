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

    // Set a default taskList


    // Sorting tasks
    self.sortType = 'created';
    self.sortReverse = false;
    // Filtering tasks
    self.taskFilter = {};
    self.clearFilter = function() {
        delete self.taskFilter.complete;
    };
}

function Task(content) {
    // A constructor function for tasks
    var self = this;
    self.content = content;
    self.complete = false;
    self.created = new Date();
}

function TaskList(name) {
    // A constructor function for task lists
    var self = this;
    self.name = name;
    self.created = new Date();
    self.tasks = [];
    self.add = function(taskContent) {
        self.tasks.push(
            new Task(taskContent)
        );
    };
    self.remove = function(task) {
        self.tasks = R.without(
            [task], self.tasks
        );
    };
    self.list = function() {
        return self.tasks;
    };
}

function TaskListService () {
    // A service to persist task data
    var self = this;
    self.taskLists = [];
    // Add a default taskList
    self.taskLists.push(
        new TaskList('default')
    ); 

    return {
        taskLists: function() {
            return self.taskLists;
        },
        toggleComplete: function(task) {
            if (task.complete) {
                task.complete = false;
                return task;
            } else {
                task.complete = true;
                return task;
            }
        },
    };
}

angular.module('todo').
    component('todoComponent', {
        templateUrl: 'todo/todo.template.html',
        controller: ['TaskListService', toDoController,
        ]   
    }).factory('TaskListService', [
        TaskListService
    ]);

