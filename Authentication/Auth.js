const express_jwt=require("jsonwebtoken")
const appModel=require("../MongoDB/appSchema")
const notFound= require("../Error/notFound")
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
require("dotenv").config
const Authentication=asyncHandler(async(req,res,next)=>{

const {name,password}=req.body
const user = await appModel.findOne({ name:name });
if(!user){
    throw notFound
}
  console.log(user.password)
const validPassword=await bcrypt.compare(password,user.password)
if(validPassword){
  const bearerToken = express_jwt.sign(
    { name: name, password: password },
    process.env.SECRET_KEY
  );

  req.token = bearerToken;
 return next();
}
   throw Error
})
module.exports=Authentication