const express= require("express")
const Router= express.Router()
const {createOperator,readAllOperator,readOneOperator,updateOperator}= require("../Route_Controllers/Controller")
Router.route("/").post(createOperator).get(readAllOperator)
Router.route("/page").get(readOneOperator).patch(updateOperator)
module.exports= Router