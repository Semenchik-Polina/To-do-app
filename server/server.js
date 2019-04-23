const express = require('express');
const multer = require('multer');
// const bodyParser = require("body-parser");
const moment = require("moment");
// const url = require('url');
const app = express();
const port = process.env.PORT || 5000;

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     let path = './data/files/';
//     callback(null, path);
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname)
//   },

// });
// const upload = multer({ storage: storage });

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      let path = 'data/files/';
      callback(null, path);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
  })
});

const type = upload.single('files');

const tasks = require("./data/tasks.json");

const minId = 100;
const maxId = 100000000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/tasks", function (req, res) {
  console.log("get tasks");
  res.send({ tasks });
});

app.post('/addTask', upload.single('files'), function (req, res, next) {
  const { summary, date } = req.body.form;
  console.log("req.files", req.files);
  const id = Math.floor(Math.random() * (maxId - minId)) + minId;
  let newTask = {
    summary: summary,
    state: "current",
    date: date,
    files: req.files,
    id: id
  };
  tasks.push(newTask);
  res.sendStatus(200);
  // req.files - массив файлов `photos`
  // req.body сохранит текстовые поля, если они будут
})

app.post('/completeTask', upload.none(), function (req, res, next) {
  const { id } = req.body.params;
  tasks.forEach(task => {
    if (task.id == id) {
      console.log("found!", task.id);
      task.state = "completed";
    }
  })
  //  console.log("tasks in server", tasks);
  res.sendStatus(200);
})

app.listen(port, () => console.log(`Listening on port ${port}`));
