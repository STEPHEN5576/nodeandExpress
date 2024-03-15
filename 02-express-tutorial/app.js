const express = require("express");
const app = express();
const path = require("path");

app.use(express.static('./public'))
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.get("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server started in 5000");
});
