const mongoose= require("mongoose")

const appSchema = new mongoose.Schema({
    name: String
})
module.exports= mongoose.model("JobbingAPI", appSchema)