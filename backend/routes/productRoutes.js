const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Route to get all items
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Route to add an item
router.post('/add', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json("Product Added!");
});

module.exports = router;