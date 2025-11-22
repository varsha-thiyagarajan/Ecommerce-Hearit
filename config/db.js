const mongoose=require("mongoose")
const connectdb=async()=>
{
    try{
            await mongoose.connect("mongodb://127.0.0.1:27017/Hearit",{
       useNewUrlParser: true,
       useUnifiedTopology: true,
            })
            console.log("Mongodb connected successfully")
    }
    
    catch{
      console.error("Mongodb failed to connect",error.message)
       process.exit(1);
    }
}
module.exports= connectdb
