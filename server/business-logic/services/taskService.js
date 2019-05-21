const uuidv4 = require('uuid/v4');
const tasks = require('../../data/tasks.json');

const getCurrentTasks = () => {
    const currentTasks = tasks.filter((task) => task.state === 'current');
    return currentTasks;
};

const getCompletedTasks = () => {
    const completedTasks = tasks.filter((task) => task.state === 'completed');
    return completedTasks;
};

const addTask = (summary, date, files) => {
    const id = uuidv4();
    const newTask = {
        summary,
        state: 'current',
        date,
        files,
        id,
    };
    tasks.push(newTask);
    return newTask;
};

const completeTask = (id) => {
    let completedTask;
    tasks.some((task) => {
        if (task.id == id) {
            console.log('found!', task.id);
            task.state = 'completed';
            completedTask = task;
            return true;
        }
    });
    return completedTask;
};

module.exports = {
    getCurrentTasks,
    getCompletedTasks,
    addTask,
    completeTask,
};
