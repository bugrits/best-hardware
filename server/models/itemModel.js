const mongoose = require("mongoose");

const itemModel = mongoose.Schema({
  name: { type: String },
  code: { type: String },
  retailPrice: { type: Number },
  sellingPrice: { type: Number },
  quantity: { type: Number },
  description: { type: String },
  isActive: { type: Boolean, default: true },
  createdBy: { type: String, default: "random user" },
  createdDate: { type: Date, default: Date.now },
  modifiedBy: { type: String, default: "random user" },
  modifiedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Item", itemModel, "devItems");
