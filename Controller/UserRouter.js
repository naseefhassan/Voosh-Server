const TaskSchema = require("../Model/TaskSchema");

const object = {
  addTask: async (req, res) => {
    try {
      console.log(req.body);
      const { task, description } = req.body;

      await TaskSchema({
        task,
        description,
      }).save();
      res.status(200).json({ message: "task saved successfully" });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "task saving failed" });
    }
  },
};

module.exports = object;
