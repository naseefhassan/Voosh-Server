const TaskSchema = require("../Model/TaskSchema");

const object = {
  addTask: async (req, res) => {
    try {
      console.log(req.body);
      const { task, description, createdAt } = req.body;

      await TaskSchema({
        task,
        description,
        createdAt
      }).save();
      res.status(200).json({ message: "task saved successfully" });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "task saving failed" });
    }
  },
  getTask: async (req, res) => {
    try {
      const Task = await TaskSchema.find();
      res.status(200).json({ message: "task fetched successfully" ,Task});
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "task fetching failed"});

    }
  },
  deleteTask:async(req,res)=>{
    try {
      const taskId = req.params.taskId
      await TaskSchema.findByIdAndDelete(taskId)
      res.status(200).json({ message: "task deletion success"});
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "task deletion failed"});
    }
  },
  editTask:async(req,res)=>{
    console.log('hlo');
    try {
      const taskId = req.params.taskId
      const {task, description} = req.body
      console.log(req.body);
     const editedTask = await TaskSchema.findByIdAndUpdate(taskId,{
      task:task,
      description:description
     },{new:true})
      res.status(200).json({ message: "editing task success", editedTask});
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "editing task failed"});
    }
  },
  value:async(req,res)=>{
    try {
      const taskId = req.params.taskId
      const editValue = await TaskSchema.findById(taskId)
      if(!editValue){
        return res.status(404).json({ message: "Task not found" });

      }
      res.status(200).json({ message: "edit value fetching success", editValue});

    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "edit value fetching failed"});
    }
  }
};

module.exports = object;
