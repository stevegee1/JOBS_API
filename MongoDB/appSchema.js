const mongoose= require("mongoose")

const appSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name field is required"]
    },
    value : Boolean
})
module.exports= mongoose.model("JobbingAPI", appSchema)