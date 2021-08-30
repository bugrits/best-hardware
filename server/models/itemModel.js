const mongoose = require("mongoose");

const itemModel = mongoose.Schema({
  name: { type: String },
  description: { type: String },
});

module.exports = mongoose.model("Item", itemModel);
