//imports
const mongoose = require("mongoose");

//schema
const Message = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
});

//export to server
module.exports = Message;
