const mongoose = require("../connection");

// Create schema
const productSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    price: Number,
  });
const userSchema = new mongoose.Schema({
    name: String,
    user: String,
    password: String,
    products: [productSchema]
});

// Create class
const User = mongoose.model("users", userSchema);

module.exports = User;
