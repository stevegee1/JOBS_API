const mongoose= require("mongoose")

const appSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  value: Boolean,
  password: {
    type: String,
    required: [true, "you need a password to register"],
  },
});
module.exports= mongoose.model("JobbingAPI", appSchema)