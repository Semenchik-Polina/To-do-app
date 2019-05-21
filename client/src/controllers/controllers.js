import axios from 'axios';

function getCurrentTasks() {
    return axios.get('/tasks/currentTasks');
}

function getCompletedTasks() {
    return axios.get('/tasks/completedTasks');
}

function completeTask(id) {
    return axios.post('/tasks/completeTask', { params: { id } });
}

function addTask(form) {
    return axios.post('/tasks/addTask', form, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

function login(data) {
    return axios.post('/auth/login', data);
}

function logout() {
    return axios.post('/auth/logout');
}
export default {
    getCurrentTasks,
    getCompletedTasks,
    completeTask,
    addTask,
    login,
    logout,
};
