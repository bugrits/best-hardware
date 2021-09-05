const mongoose = require("mongoose");

const itemModel = mongoose.Schema({
  name: { type: String },
  code: { type: String },
  retailPrice: { type: Number },
  sellingPrice: { type: Number },
  quantity: { type: Number },
  description: { type: String },
  createdBy: { type: String },
  createdDate: { type: Date },
  modifiedBy: { type: String },
  modifiedDate: { type: Date },
});

module.exports = mongoose.model("Item", itemModel, "devItems");
