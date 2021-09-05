const express = require("express");
const itemsController = require("../controllers/itemsController");

const routes = (Item) => {
  const itemRouter = express.Router();
  const controller = itemsController(Item);

  itemRouter.route("/items").post(controller.postItem).get(controller.getItems);

  // middleware
  itemRouter.use("/items/:itemId", (req, res, next) => {
    Item.findById(req.params.itemId, (err, item) => {
      if (err) {
        return res.send(err);
      }
      if (item) {
        // req.itemId = req.params.itemId;
        req.item = item;
        return next();
      }
      return res.sendStatus(404);
    });
  });

  itemRouter
    .route("/items/:itemId")
    .get(controller.getItem)
    .patch(controller.updateItem);

  return itemRouter;
};

module.exports = routes;
