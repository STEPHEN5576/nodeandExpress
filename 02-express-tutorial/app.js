const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
//uses only after api query
// app.use("/api", logger);
const { products } = require("./data");
app.use([logger, authorize]);
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send(products);
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("items");
});

app.listen(5000, () => {
  console.log("Server is listening to 5000...");
});
