const appModel = require("../MongoDB/appSchema");
const asyncHandler = require("express-async-handler");
const notFound= require("../Error/notFound")
const express_jwt = require("jsonwebtoken");
const bcrypt=require("bcryptjs")
require("dotenv").config()
//CRUD operation- CREATE , READ, UPDATE, DELETE

//CREATE job api
const createOperator = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, value ,password} = req.body;
  const salt=await bcrypt.genSalt(10)
  const hashedPassword=await bcrypt.hash(password,salt)
  const jobCreated = await appModel.create({ name: name, value: value,password:hashedPassword });
  console.log(jobCreated)
  const bearerToken = express_jwt.sign({name:name,password:password}, process.env.SECRET_KEY);
  res.status(200).json({ Success: bearerToken});
});

//get all jobs api
const readAllOperator = asyncHandler(async (req, res) => {
 
const token=req.token
console.log(token)
var decoded=express_jwt.verify(token,process.env.SECRET_KEY)
console.log(decoded)
  const allDocuments = await appModel.find();
  res.status(200).json(allDocuments);
});

//this function get only one job according to its name. You can search for specific job
const readOneOperator = asyncHandler(async (req, res) => {
  const nameOftask = req.query.name;
  console.log(nameOftask);

  const oneDocument = await appModel.findOne({ name: nameOftask });
  console.log(oneDocument)
  if (!oneDocument) {
    throw Error ("name query is not provided")
  }
  res.status(200).json(oneDocument);
});

//I could save empty name after update though the appSchema specified string name must be true
const updateOperator = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const query = req.body;

  const updatedItem = await appModel.findByIdAndUpdate(id, query, {
    returnDocument: "after",
    runValidators:true
  },
);
console.log(updatedItem)
  if (!updatedItem) {
    //throw Error ("id not found");
    throw new notFound
  }
  res.status(200).json({ Success: updatedItem });
});
const deleteOperator = asyncHandler(async (req, res) => {
  const { id: taskID } = req.params;
  console.log(taskID);

  const updatedItem = await appModel.findByIdAndRemove(taskID);
  if (!updatedItem) {
  throw Error ("id not found");
  }
  res.status(200).json({ Success: updatedItem });
});

module.exports = {
  createOperator,
  readAllOperator,
  readOneOperator,
  updateOperator,
  deleteOperator,
};
