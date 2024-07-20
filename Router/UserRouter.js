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
const verifyToken = require("../Middleware/JwtToken");

router.post("/task", verifyToken, addTask);
router.get("/getTask",verifyToken, getTask);
router.delete("/deleteTask/:taskId",verifyToken, deleteTask);
router.put("/editTask/:taskId",verifyToken, editTask);
router.get("/value/:taskId",verifyToken, value);
router.post("/updateTaskOrder",verifyToken, updateTaskOrder);
router.post("/updateTaskState",verifyToken, updateTaskState);

module.exports = router;
