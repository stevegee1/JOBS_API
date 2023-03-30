const express= require("express")
const Router= express.Router()
const {createOperator,readAllOperator,readOneOperator,updateOperator,deleteOperator}= require("../Route_Controllers/Controller")
Router.route("/").post(createOperator).get(readAllOperator)
Router.route("/page").get(readOneOperator).patch(updateOperator).delete(deleteOperator)
module.exports= Router