const appModel = require("../MongoDB/appSchema");
const asyncHandler = require("express-async-handler");

//CRUD operation- CREATE , READ, UPDATE, DELETE

//CREATE job api
const createOperator = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, value } = req.body;
  const jobCreated = await appModel.create({ name: name, value: value });
  res.status(200).json({ Success: jobCreated });
});

//get all jobs api
const readAllOperator = asyncHandler(async (req, res) => {
  const allDocuments = await appModel.find();
  res.status(200).json(allDocuments);
});

//this function get only one job according to its name. You can search for specific job
const readOneOperator = asyncHandler(async (req, res) => {
  const nameOftask = req.query.name;
  console.log(nameOftask);

  const oneDocument = await appModel.findOne({ name: nameOftask });
  if (!oneDocument) {
    return res.send("sorry, queried name must be provided");
  }
  res.status(200).json(oneDocument);
});

//I could save empty name after update though the appSchema specified string name must be true
const updateOperator = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const query = req.body;

  const updatedItem = await appModel.findOneAndUpdate(id, query, {
    returnDocument: "after",
  });
  if (!updatedItem) {
    return res.status(400).send("id not found");
  }
  res.status(200).json({ Success: updatedItem });
});
const deleteOperator = asyncHandler(async (req, res) => {
  const { id: taskID } = req.params;
  console.log(taskID);

  const updatedItem = await appModel.findByIdAndRemove(taskID);
  if (!updatedItem) {
    return res.status(400).send("id not found");
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
