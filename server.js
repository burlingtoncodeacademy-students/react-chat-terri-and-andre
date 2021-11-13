//imports
require("dotenv").config();

const { urlencoded } = require("express");
//imports express
const express = require("express");

//assigns express to a variable
const app = express();
// const path = require("path");

//imports mongoose to create entry schema & connects mongoose to database
const mongoose = require("mongoose");

//imports Messages schema from Messages.js
const Message = require("./Message");

const port = process.env.PORT || 5000;

//added .env file with DEV=true
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

//creates initial connection to database
mongoose.connect(`mongodb://localhost:27017/React-Chat`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//init the database through the connection constructor, stored in a variable
const connection = mongoose.connection;

//error message on connection if error occurs
connection.on(
  "error",
  console.error.bind(console, "Seems like you've encountered an error...")
);

//middleware
app.use(express.static(staticDir));
app.use(express.urlencoded({ extended: true }));

//message post models using the messages schema
//creating model for message post
let ChatMsg = mongoose.model("Messages", Message);

//send all results as a json to the page
app.get("/allmessages", async (req, res) => {
  let allMessages = await ChatMsg.find({});
  res.json(allMessages);
});

//function to putting a new message into the collection
app.post("/chat", async (req, res) => {
  //assigning the new message to a variable
  const newMessage = new Message({
    name: req.body.name,
    message: req.body.message,
  });

  //saves new message entry
  await newMessage.save();
});

app.listen(port, () => {
  console.log(`Hey, Dumbo! Keeps those ears open for port ${port}`);
});
