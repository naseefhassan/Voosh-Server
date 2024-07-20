const express = require("express");
const router = express.Router();
const {
  addTask,
  getTask,
  deleteTask,
  editTask,
  value,
  updateTaskOrder,
  updateTaskState,
} = require("../Controller/UserController");

router.post("/task", addTask);
router.get("/getTask", getTask);
router.delete("/deleteTask/:taskId", deleteTask);
router.put("/editTask/:taskId", editTask);
router.get("/value/:taskId", value);
router.post("/updateTaskOrder", updateTaskOrder);
router.post("/updateTaskState", updateTaskState);

module.exports = router;
