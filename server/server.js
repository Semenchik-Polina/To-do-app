const express = require('express');
const app = express();

const { PORT } = require('./constants/constants');

const initSettings = require('./web api/middlewares/settings');
const initRouter = require('./web api/routes')

initSettings(app);
initRouter(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
