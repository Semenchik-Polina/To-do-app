const express = require('express');
const authRouter = express.Router();
const validateUser = require('../../controllers/userValidationController');

const authController = require('../../controllers/authController');

authRouter
    .get('/logout', authController.logout)
    .post('/login', authController.login);

module.exports = (app) => {
    app.use('/auth', authRouter);
};
