const authRouter = require('./auth');
const taskRouter = require('./task');

module.exports = (app) => {
    authRouter(app);
    taskRouter(app);
};
