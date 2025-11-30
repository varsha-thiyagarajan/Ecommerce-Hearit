const connectdb = require('./config/db');
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const Product = require("./models/products");
const User=require("./models/user");

dotenv.config();
connectdb();

const app = express();
app.use(cors());              
app.use(express.json());

app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});
app.post('/login',async(req,res)=>
{
  const {email,password}=req.body
  let user=await User.findOne({email})
  if(!user)
  {
    return res.json({msg:"User not found"})
  }
  if(user.password!==password)
  {
    return res.json({msg:" Invalid password "})
  }

res.json({
  msg:"login successful"
})
})
app.post('/register',async(req,res)=>
{
  const{name,email,password}=req.body
  let user=await User.findOne({email})
  if(user)
  {
    return res.json({msg:"User already found"})

  }
  const newUser=await User({
    name:name,
    email:email,
    password:password
  }).save()
  if (newUser)
  {
    return res.json({msg:"Register successfull"})
  }
 return res.json({ msg: "Something went wrong" });
})
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
