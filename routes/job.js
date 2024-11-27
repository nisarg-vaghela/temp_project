const express = require("express");
const router = express.Router();
const Job = require("../schemas/fooditems.schema");
const User = require("../schemas/user.schema");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();

app.get('/getAllFoodItems', async (req, res) => {
    try {
        const products = await Product.find(); 
        res.status(200).json(products); 
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});



module.exports = router;