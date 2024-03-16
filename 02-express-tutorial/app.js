const express = require("express");
const app = express();
const { products } = require("./data");
app.set("json spaces", 2);
app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  console.log(req.params);
  const parsedProductID = parseInt(productID);
  const singleproduct = products.find(
    (product) => product.id === parsedProductID
  );
  if(!singleproduct){
    return res.status(404).send('Product Deos not Exist')
  }
  res.json(singleproduct);
});

app.listen(5000, () => {
  console.log("Server is listening to 5000...");
});
