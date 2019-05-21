const taskService = require('../../business-logic/services/taskService');

const getCurrentTasks = async (req, res, next) => {
    const currentTasks = await taskService.getCurrentTasks();
    res.send({ currentTasks });
};

const getCompletedTasks = async (req, res, next) => {
    const completedTasks = await taskService.getCompletedTasks();
    res.send({ completedTasks });
};

const addTask = async (req, res, next) => {
    const { summary, date } = req.body;
    const files = req.file ? req.file : null;
    const newTask = await taskService.addTask(summary, date, files);
    res.send(newTask);
};

const completeTask = async (req, res, next) => {
    const { id } = req.body.params;
    const completedTask = await taskService.completeTask(id);
    res.send(completedTask);
};

module.exports = {
    getCurrentTasks,
    getCompletedTasks,
    addTask,
    completeTask,
};
