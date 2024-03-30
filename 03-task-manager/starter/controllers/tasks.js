const Task = require("../models/Task");
const asyncWrapper = require('../middleware/async')


const getAllTasks =asyncWrapper( async (req, res) => {
  
    const tasks = await Task.find({});
    // res.status(200).json({ tasks });
    // res.status(200).json({ tasks,data:tasks.length });
    res
      .status(200)
      .json({ status: 'success', data: { tasks, nbHits: tasks.length } });
});

const createTask =asyncWrapper( async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  
});

const getTask = asyncWrapper( async (req, res) => {
  
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
  
});

const deleteTask =asyncWrapper( async (req, res) => {
  
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).send({ msg: `Not found id: ${taskID}` });
    }
    res.status(200).json({ task: null, status: "success" });
  
});

const UpdateTask =asyncWrapper( async (req, res) => {

    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ msg: `Not found id: ${taskID}` });
    }
    res.status(200).json({ task });

});

const editTask =asyncWrapper( async () => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
      overwrite: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with the id: ${taskID}` });
    }
    return res.status(200).json({ task });
  
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  UpdateTask,
  deleteTask,
};
