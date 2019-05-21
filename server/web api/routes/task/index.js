const express = require('express');
const taskRouter = express.Router();
const userValidationController = require('../../controllers/userValidationController');

const taskController = require('../../controllers/taskController');
const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            let path = 'data/files/';
            callback(null, path);
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});

taskRouter
    .get('/currentTasks', userValidationController.validateUser, taskController.getCurrentTasks)
    .get('/completedTasks', userValidationController.validateUser, taskController.getCompletedTasks)
    .post('/addTask', upload.single('files'), taskController.addTask)
    .post('/completeTask', upload.none(), taskController.completeTask);
module.exports = (app) => {
    app.use('/tasks', taskRouter);
};
