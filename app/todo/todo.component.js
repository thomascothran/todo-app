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
        self.taskInput = '';
    };
    self.removeTask = function(task) {
        TaskList.remove(task);
    };
    self.toggleComplete = function(task) {
        TaskList.toggleComplete(task);
    };
    // Formatting helper function
    self.formatDate = function(date) {
        console.log('Date is of type ' + typeof(date));
        return date;
    }
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
    this.content = content;
    this.complete = false;
    this.created = new Date();
}

function TaskList () {
    // A service to persist task data
    var self = this;
    self.taskList = [];
    return {
        list: function() {
            return self.taskList;
        },
        add: function(taskContent) {
            self.taskList.push(
                new Task(taskContent)
            );
        },
        remove: function(task) {
            self.taskList = R.without(
                [task], self.taskList
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

