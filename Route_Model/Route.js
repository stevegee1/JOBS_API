const express= require("express")
const Router= express.Router()
const postHomepage= require("../Route_Controllers/Controller")
Router.route("/").post(postHomepage)
module.exports= Router