const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: { type: String, required: true },
  description: { type: String, required: true },
  state: { type: String, default: "task", required: true },
  createdAt: { type: Date, required: true },
  order: { type: Number, default: 0 }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
