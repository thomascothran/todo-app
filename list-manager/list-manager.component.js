'use strict';

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
    // Not use self?
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
function listManagerComponent(TaskListService) {
    var self = this;
    self.test = 'This is a test';
}

angular.module('list-manager')
    .component('listManagerComponent', {
        templateUrl: 'list-manager/list-manager.template.html',
        controller: ['TaskListService', listManagerComponent]
    }
    ).
    factory('TaskListService', [
        TaskListService
    ]);
