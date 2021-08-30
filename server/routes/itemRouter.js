const express = require("express");
const itemsController = require("../controllers/itemsController");

const routes = (Item) => {
  const itemRouter = express.Router();
  const controller = itemsController(Item);

  itemRouter.route("/items").post(controller.postItem).get(controller.getItems);

  return itemRouter;
};

module.exports = routes;
