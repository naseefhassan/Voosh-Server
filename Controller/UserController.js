const Task = require("../Model/TaskSchema");

const taskController = {
  addTask: async (req, res) => {
    try {
      const { task, description, createdAt, order } = req.body;
      await Task.create({ task, description, createdAt, order });
      res.status(200).json({ message: "Task saved successfully" });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Task saving failed" });
    }
  },

  getTask: async (req, res) => {
    try {
      const tasks = await Task.find().sort({ order: 1 });
      res.status(200).json({ message: "Tasks fetched successfully", tasks });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Task fetching failed" });
    }
  },

  deleteTask: async (req, res) => {
    try {
      const taskId = req.params.taskId;
      await Task.findByIdAndDelete(taskId);
      res.status(200).json({ message: "Task deletion successful" });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Task deletion failed" });
    }
  },

  editTask: async (req, res) => {
    try {
      const taskId = req.params.taskId;
      const { task, description } = req.body;
      const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        { task, description },
        { new: true }
      );
      res.status(200).json({ message: "Task editing successful", updatedTask });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Task editing failed" });
    }
  },

  value: async (req, res) => {
    try {
      const taskId = req.params.taskId;
      const task = await Task.findById(taskId);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json({ message: "Task fetching successful", task });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Task fetching failed" });
    }
  },
  updateTaskOrder: async (req, res) => {
    try {
      const { orderedTasks } = req.body; // orderedTasks should be an array of task objects with _id and order
      for (const task of orderedTasks) {
        await Task.findByIdAndUpdate(task._id, { order: task.order });
      }
      res.status(200).json({ message: "Task order updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Task order update failed" });
    }
  },
  updateTaskState: async (req, res) => {
    try {
      const { _id, state } = req.body;
      const updatedTask = await Task.findByIdAndUpdate(_id, { state }, { new: true });
      res.status(200).json({ message: "Task state updated successfully", updatedTask });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Task state update failed" });
    }
  },
};

module.exports = taskController;
