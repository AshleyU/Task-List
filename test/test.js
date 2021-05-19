const { assert, expect } = require('chai');
const { describe, it } = require('mocha');
const TaskManager = require('../js/taskManager.js');

describe('taskManager functions', () => {
    describe('addTask', () => {
        it('should add a new task to newTask', () => {
        const TaskMan = new TaskManager();
        TaskMan.addTask("Clean", "clean room", "Ashley", "05/20/2021", "To do");
        assert.ok(TaskMan.tasks.length == 1);
        });
    });

    describe('deleteTask', () => {
        it('should delete a task when delete is clicked', () => {
        const TaskMan = new TaskManager();
        TaskMan.addTask("Clean", "clean room", "Ashley", "05/20/2021", "To do");
        TaskMan.deleteTask(0);
        assert.ok(TaskMan.tasks.length == 0);
        });
    });

    describe('getTaskById', () => {
        it('should find a task based on the id', () => {
            const TaskMan = new TaskManager();
            TaskMan.addTask("Clean", "clean room", "Ashley", "05/20/2021", "To do");
            const testTask = TaskMan.getTaskById(0);
            assert.ok(testTask.id == 0);
        });
    });
});