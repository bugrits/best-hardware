const itemsController = (Item) => {
  const postItem = async (req, res) => {
    const item = new Item(req.body);

    try {
      const addedItem = await item.save();

      res.status(201);
      res.json(addedItem);
    } catch (err) {
      res.json({ message: err });
    }
  };

  const getItems = async (req, res) => {
    try {
      const items = await Item.find();

      res.json(items);
    } catch (err) {
      res.json({ message: err });
    }
  };

  return { postItem, getItems };
};

module.exports = itemsController;
