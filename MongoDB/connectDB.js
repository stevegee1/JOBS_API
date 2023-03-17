require("dotenv").config();
const mongoose = require("mongoose");
const connectionURL = `mongodb+srv://steve:${process.env.password}@nodeexpressjs.qoawcx2.mongodb.net/jobcollection?retryWrites=true&w=majority`;

const connectDB = async () => {
  return mongoose.connect(connectionURL);
};
module.exports = connectDB;
