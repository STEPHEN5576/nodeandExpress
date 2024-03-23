const getAllTasks = (req, res) => {
  res.send("All items From the File");
};
const createTask = (req, res) => {
  res.json(req.body);
};
const getTask = (req, res) => {
  res.json({ id : req.params.id }); 
};
const UpdateTask = (req, res) => {
  res.send("update Task");
};
const deleteTask = (req, res) => {
  res.send("Delete Task");
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  UpdateTask,
  deleteTask,
};