const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;
const Item = require("./models/itemModel");
const itemRouter = require("./routes/itemRouter")(Item);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", itemRouter);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.server = app.listen(port, () => {});

module.exports = app;
