const mongoose=require("mongoose")
const Userschema=new mongoose.Schema({
    email:String,
    password:String
})
module.exports = mongoose.model("User", Userschema);