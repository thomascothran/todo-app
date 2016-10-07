'use strict';
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
    }
}

angular.module('todo')
    .factory('TaskList', [TaskList]);
