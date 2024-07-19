const express = require("express");
const router = express.Router();
const {addTask} = require("../Controller/UserRouter");


router.post('/task',addTask)
module.exports = router;
