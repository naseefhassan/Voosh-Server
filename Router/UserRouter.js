const express = require("express");
const router = express.Router();
const {addTask, getTask, deleteTask, editTask, value} = require("../Controller/UserRouter");


router.post('/task',addTask)
router.get('/getTask',getTask)
router.delete('/deleteTask/:taskId',deleteTask)
router.put('/editTask/:taskId',editTask)
router.get('/value/:taskId',value)

module.exports = router;
