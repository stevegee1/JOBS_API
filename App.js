const express = require("express");
require("express-async-errors")
const app = express();
const connectDB = require("./MongoDB/connectDB");

const Router= require("./Route_Model/Route")
PORT = 5000;

//middleware
app.use(express.json())
app.use(Router)

const start = async () => {
  try {
    await connectDB();
    console.log("successfully connected to the DB");
    app.listen(PORT, console.log(`The app is listening on port ${PORT}`));
 
  } catch (error) {
    console.log(`Failed with the ${error}`);
  }
};
start();
