const mongoose = require("mongoose");

const womenSchema = new mongoose.Schema(
  {
    brandName: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: false },
    image: [{ type: String, required: true }],
    discount: { type: Number, required: true },
    sizes: [{ type: String, required: false }],
    color: [{ type: String, required: false }],
    gender: { type: String, required: true },
    status: { type: Boolean, required: false },
  },
  {
    versionKey: false,
    timestamp: true,
  }
);

const Women = mongoose.model("women", womenSchema);

module.exports = Women;
