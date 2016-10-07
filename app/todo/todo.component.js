'use strict';

// Declare app level module which depends on views, and components

function toDoController(TaskList) {
    var self = this;
    self.taskList = function() {
        return TaskList.list();
    };
    self.addTask = function() {
        TaskList.add();
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
    };
}

angular.module('todo').
    component('todoComponent', [
        'TaskList', {
        templateUrl: 'todo/todo.template.html',
        controller: toDoController(TaskList),
        }
    ]).factory('TaskList', TaskList);

