require('dotenv').config();
const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

const app = express();
app.use(express.json());

app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () => {
  try {
    console.log(process.env.MONGO_URI)
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server started on ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();