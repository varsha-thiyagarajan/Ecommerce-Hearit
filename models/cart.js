const mongoose=require("mongoose")
const cartSchema=new mongoose.Schema(
    {
        productId: String,
        email:String,
        name:String,
        description:String,
        price:Number
    }
)
module.exports=mongoose.model("Cart",cartSchema)