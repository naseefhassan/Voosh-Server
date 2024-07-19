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
};

module.exports = object;
