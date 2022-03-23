const express = require("express");

const Product = require("../models/product.js");

const router = express.Router();

router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.send(product);
});

router.get("/", async (req, res) => {
  const products = await Product.find().lean().exec();
  return res.status(201).send(products);
});

router.get("details/:id", async (req, res) => {
  try {
    const el = await Product.findById(req.params.id).lean().exec();
    console.log(el);
    return res.send(el);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/type/:id", async (req, res) => {
  const products = await Product.find({ category: { $eq: `${req.params.id}` } })
    .lean()
    .exec();

  res.send(products);
});

router.get("/brand/:id", async (req, res) => {
  console.log("req:", req.params.id);
  const product = await Product.findById(req.params.id).lean().exec();
  console.log("product:", product);
  res.send(product);
});

module.exports = router;
