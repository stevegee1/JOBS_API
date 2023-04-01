const express= require("express")
const Router= express.Router()
const Auth=require("../Authentication/Auth")
const {createOperator,readAllOperator,readOneOperator,updateOperator,deleteOperator}= require("../Route_Controllers/Controller")
Router.route("/").post(createOperator)
Router.route("/read").post(Auth,readAllOperator);
Router.route("/page/:id").patch(updateOperator).delete(deleteOperator)
Router.route("/page/").get(readOneOperator);
module.exports= Router