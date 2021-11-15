//imports
const mongoose = require('mongoose')

//schema used for Chat 1
const Message = new mongoose.Schema({
  //setting the types and requirement or default for each message category
  name: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now() }
})

//export to server
module.exports = Message
