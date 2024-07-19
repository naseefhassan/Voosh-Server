const express = require("express");
const router = express.Router();
const {addTask, getTask} = require("../Controller/UserRouter");


router.post('/task',addTask)
router.get('/getTask',getTask)
module.exports = router;
