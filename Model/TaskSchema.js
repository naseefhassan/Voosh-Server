const mongoose = require("mongoose");

const AddTask = new mongoose.Schema({
  task: { type: String, required: true },
  description: { type: String, required: true },
  state: { type: String, default: "task", required: true },
  createdAt: { type: Date, required: true,},
});

const TaskSchema = new mongoose.model("Task", AddTask);

module.exports = TaskSchema;
