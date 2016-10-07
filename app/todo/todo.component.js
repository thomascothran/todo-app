'use strict';

// Declare app level module which depends on views, and components

function toDoController(TaskList) {
    var self = this;
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
}

function Task(content) {
    // A constructor function for tasks
    this.content = content;
    this.complete = false;
}

function TaskList () {
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
            } else {
                task.complete = true;
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

