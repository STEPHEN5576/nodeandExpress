const express = require("express");
const app = express();
let {people} = require('./data');
app.set("json spaces", 2)

app.get('/api/people', (re, res) =>{
  res.status(200).json({
    sucess : true,
    data: people,
  })
})


app.listen(5000, () => {
  console.log("Server is listening to 5000...");
});
