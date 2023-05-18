const { createCustomError } = require('../errors/custom-error');
const asyncWrapper = require('../middleware/async');
const Task = require('../models/Task');

exports.getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

exports.createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

exports.getTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findById(id);

  if (!task) {
    return next(createCustomError(`No task with ID: ${id}`, 404));
  }

  res.status(200).json({ task });
});

exports.updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndUpdate({_id : id}, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No task with ID: ${id}`, 404));
  }

  res.status(200).json({ task });
});

exports.deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndRemove({_id : id});

  if (!task) {
    return next(createCustomError(`No task with ID: ${id}`, 404));
  }

  res.status(200).json({ task });
});