const { findOneAndUpdate } = require("../MongoDB/appSchema");
const appModel = require("../MongoDB/appSchema");


//CRUD operation- CREATE , READ, UPDATE, DELETE

//CREATE job api
const createOperator = async (req, res) => {
  try {
    const {name}= req.body
    // const newAppModel = new appModel(req.body);
    const jobCreated = await appModel.create({name:name});
    res.status(200).json({"Success":jobCreated});
  } catch (error) {
    res.send(error);
  }
};

//get all jobs api
const readAllOperator= async(req, res)=>{
try {
  const allDocuments = await appModel.find();
  res.status(200).json(allDocuments);
} catch (error) {
  res.status(400).json({message: error})
}
}

//this function get only one job according to its name. You can search for specific job
const readOneOperator= async(req, res,next)=>{
  const nameOftask= req.query.name
  console.log(nameOftask)
try {
  const oneDocument = await appModel.findOne({name:nameOftask});
  if (!oneDocument){
    return res.send("sorry, queried name must be provided")
  }
  res.status(200).json(oneDocument);
} catch (error) {
 next(error)
}

}

//I could save empty name after update though the appSchema specified string name must be true
const updateOperator = async(req, res)=>{
  const {id}= req.query
  console.log(id)
  const query= req.body
  try {
    
  const updatedItem = await appModel.findOneAndUpdate(id, query, {returnDocument:"after"});
  res.status(200).json({"Success": updatedItem})
 
  } catch (error) {
    next(error)
  } 
}
const deleteOperator = async (req, res) => {
  
};
module.exports = {createOperator,readAllOperator,readOneOperator,updateOperator,deleteOperator};
