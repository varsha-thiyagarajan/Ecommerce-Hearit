const mongoose=require("mongoose")
const productschema=new mongoose.Schema(
    {
        
        name:String,
        description:String,
        price:Number
    }
)
module.exports = mongoose.model("Product", productschema);