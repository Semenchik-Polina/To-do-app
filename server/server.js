const express = require('express');
const multer = require('multer');
const app = express();
const tasks = require("./data/tasks.json");
const uuidv4 = require('uuid/v4');

const {PORT} = require("./constants/constants")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      let path = 'data/files/';
      callback(null, path);
    },
    filename: (req, file, cb) => {
      cb(null, '${Date.now()}-${file.originalname}');
    }
  })
});

app.get("/tasks", function (req, res) {
  console.log("get tasks");
  res.send({ tasks });
});

app.post('/addTask', upload.single('files'), function (req, res, next) {
  const { summary, date } = req.body;
  const id = uuidv4();
  const newTask = {
    summary,
    state: "current",
    date,
    files: req.file ? req.file : null,
    id
  };
  tasks.push(newTask);
  // res.sendStatus(200);
  res.send(newTask);
})

app.post('/completeTask', upload.none(), function (req, res, next) {
  const { id } = req.body.params;
  tasks.forEach(task => {
    if (task.id == id) {
      console.log("found!", task.id);
      task.state = "completed";
    }
  })
  res.sendStatus(200);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
