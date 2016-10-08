'use strict';

// Declare app level module which depends on views, and components

function toDoController(TaskList) {
    var self = this;
    // Filters for task list
    self.taskList = function() {
        return TaskList.list();
    };
    self.addTask = function(taskContent) {
        TaskList.add(taskContent);
    };
    self.removeTask = function(task) {
        TaskList.remove(task);
    };
    self.toggleComplete = function(task) {
        TaskList.toggleComplete(task);
    };
    // Filtering tasks
    self.showFilter = true;
    console.log("self.showFilter is " + self.showFilter);
    self.toggleFilter = function() {
        console.log('Entering toggleFilter.');
        if (self.showFilter) {
            self.showFilter = false;
            self.taskFilter = {};
        } else {
            self.showFilter = true;
        }
    };
    self.taskFilter = {
        complete: false,
    };
}

function Task(content) {
    // A constructor function for tasks
    this.content = content;
    this.complete = false;
    this.created = Date();
}

function TaskList () {
    // A service to persist task data
    var taskList = [];
    return {
        list: function() {
            return taskList;
        },
        add: function(taskContent) {
            taskList.push(
                new Task(taskContent)
            );
        },
        remove: function(task) {
            taskList = R.without(
                [task], taskList
            );
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
        controller: ['TaskList', toDoController,
        ]   
    }).factory('TaskList', [
        TaskList
    ]);

