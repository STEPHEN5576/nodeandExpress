const  Task = require('../models/Task')

const getAllTasks =async (req, res) => {
  try{
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  }catch(error){
    console.log(error)
  }
};
const createTask = async (req, res) => {
  try{
    const task = await Task.create(req.body)
    res.status(201).json({task});
  }catch(error){
    res.status(500).json({msg: error})
  }
};
const getTask =async (req, res) => {
  try{
    const{id: taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task){
      return res.status(404).json({msg:`No task with id : ${taskID}`})
    }
    res.status(200).json({ task }); 
  }catch(error){
    console.log(error);
  }
};
const UpdateTask = (req, res) => {
  res.send("update Task");
};

const deleteTask = async (req, res) => {
  try{
const {id: taskID} = req.params;
const task = await Task.findOneAndDelete({_id:taskID})
if(!task){
  res.status(404).send({msg: `Not found id: ${taskID}`})
}
res.status(200).json({ task });
  }catch(error){

  }
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  UpdateTask,
  deleteTask,
};