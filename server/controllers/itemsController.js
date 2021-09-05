const itemsController = (Item) => {
  const getItems = async (req, res) => {
    try {
      const items = await Item.find();

      res.json(items);
    } catch (err) {
      res.json({ success: false, message: err });
    }
  };

  const postItem = async (req, res) => {
    const item = new Item(req.body);

    try {
      await item.save();

      res.status(201).json({ success: true, message: "Added successfully!" });
    } catch (err) {
      res.json({ success: false, message: err });
    }
  };

  const getItem = async (req, res) => {
    const returnedItem = req.item;

    try {
      res.json(returnedItem);
    } catch (err) {
      res.json({ success: false, message: err });
    }
  };

  const updateItem = async (req, res) => {
    if (req.body._id) {
      delete req.body._id;
    }

    Object.entries(req.body).forEach((obj) => {
      const key = obj[0];
      const value = obj[1];

      req.item[key] = value;
    });

    try {
      await req.item.save();
      res.status(201).json({ success: true, message: "Updated successfully!" });
    } catch (err) {
      res.json({ success: false, message: err });
    }
  };

  return { getItems, postItem, getItem, updateItem };
};

module.exports = itemsController;
