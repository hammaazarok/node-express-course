const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
  const tasks = await Task.find();

  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

exports.getTask = (req, res) => {
  res.send('get single task');
};

exports.updateTask = (req, res) => {
  res.send('Update task');
};

exports.deleteTask = (req, res) => {
  res.send('Delete task');
};