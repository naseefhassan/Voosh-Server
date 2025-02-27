const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
require("dotenv").config();
require('./Config/config')
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const CommonRouter= require('./Router/CommonRouter')
const UserRouter= require('./Router/UserRouter')

app.use('/',CommonRouter)
app.use('/user',UserRouter)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
