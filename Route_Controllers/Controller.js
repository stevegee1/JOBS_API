const appModel = require("../MongoDB/appSchema");


//CRUD operation- CREATE , READ, UPDATE, DELETE
const createOperator = async (req, res) => {
  try {
    // const newAppModel = new appModel(req.body);
    const x = await appModel.create(req.body);
    res.send(x);
  } catch (error) {
    res.send(error);
  }
};
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
  const oneDocument = await appModel.findOne({name:ameOftask});
  if (!oneDocument){
    return res.send("jaapa")
  }
  res.status(200).json(oneDocument);
} catch (error) {
  console.log("x")
  const x = new Error(error)
  console.log(x)
  next(x);
}

}
const updateOperator = async(req, res)=>{
  
}
const deleteOperator = async (req, res) => {};
module.exports = {createOperator,readAllOperator,readOneOperator,updateOperator,deleteOperator};
