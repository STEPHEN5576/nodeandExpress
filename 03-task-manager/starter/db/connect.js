const mongoose = require("mongoose");



// Options to pass to mongoose.connect()
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const connectDB = (url) =>{
 mongoose.connect(url, options);
}

module.exports = connectDB


