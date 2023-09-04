const mongoose = require("mongoose");
require('dotenv').config();
const DB = 'mongodb+srv://DPharma:p64mexISgldkB6rn@cluster0.pzmzys2.mongodb.net/DPharma?retryWrites=true&w=majority';

mongoose.connect(DB, {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
}) 
.then(() => {
  console.log("Connection Successful");
})
.catch((err) => {
  console.log("No Connection", err);
});
