const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
},{timestamps:true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product; //refers to the model, not the schema