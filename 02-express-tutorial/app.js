const express = require("express");
const app = express();
const {products}= require('./data');
app.set("json spaces", 2);
app.get("/", (req, res) => {
  res.json(products);
});
app.listen(5000, () => {
  console.log("Server is listening to 5000...");
});
