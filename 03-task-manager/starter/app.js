const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
require('dotenv').config();
const connectDB = require("./db/connect");
const notfound = require('./middleware/not-found');
// middleware
app.use(express.static('./public'))
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

app.use(notfound)

const port = 3000;

const start = async () =>{
  try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is listening on ${port}...`));
  }
  catch(error){
    console.log(error);
  }
}
start();