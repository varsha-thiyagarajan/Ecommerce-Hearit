const connectdb = require('./config/db');
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const Product = require("./models/products");

dotenv.config();
connectdb();

const app = express();
app.use(cors());              
app.use(express.json());

app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
