import axios from 'axios';

function getTasks() {
    return axios.get('/tasks');
}

function completeTask(id) {
    return axios.post('/completeTask', { params: { id } });
}

function addTask(form) {
    return axios.post('/addTask', form, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

export default {
    getTasks,
    completeTask,
    addTask,
};
