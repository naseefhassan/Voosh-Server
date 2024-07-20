const express = require("express");
const router = express.Router();
const {addTask, getTask, deleteTask, editTask} = require("../Controller/UserRouter");


router.post('/task',addTask)
router.get('/getTask',getTask)
router.delete('/deleteTask/:taskId',deleteTask)
router.put('/editTask/:taskId',editTask)
module.exports = router;
