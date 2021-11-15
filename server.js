//imports
require('dotenv').config()

const { urlencoded } = require('express')
//imports express
const express = require('express')

//assigns express to a variable
const app = express()
// const path = require("path");

//imports mongoose to create entry schema & connects mongoose to database
const mongoose = require('mongoose')

//imports Messages schema from Messages.js
const Message = require('./Message')

//imports Messages schema from Messages2.js
const Message2 = require('./Message2')

//imports Messages schema from Messages3.js
const Message3 = require('./Message3')

// specifies a port
const port = process.env.PORT || 5000

//added .env file with DEV=true
const staticDir = process.env.DEV ? './client/public' : './client/build'

//creates initial connection to database
mongoose.connect(`mongodb://localhost:27017/React-Chat`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//init the database through the connection constructor, stored in a variable
const connection = mongoose.connection

//error message on connection if error occurs
connection.on(
  'error',
  console.error.bind(console, "Seems like you've encountered an error...")
)

//middleware
app.use(express.static(staticDir))
app.use(express.urlencoded({ extended: true }))

//message post models using the messages schema
//creating model for message post
const ChatMsg = mongoose.model('messages', Message)

//send all results as a json to the page for main chat (Chat room 1)
app.get('/allmessages', async (req, res) => {
  let allMessages = await ChatMsg.find({})
  res.json(allMessages)
})

//route for /chat to put new message into the collection
app.post('/chat', async (req, res) => {
  //assigning the new message to a variable
  const newMessage = new ChatMsg({
    name: req.body.name,
    message: req.body.message
  })

  //saves new message entry
  await newMessage.save()
})

//creating model for messages from room2 post
const ChatMsg2 = mongoose.model('message2s', Message2)
//send all results as a json to the page for room 2
app.get('/chat2messages', async (req, res) => {
  let chat2Messages = await ChatMsg2.find({})
  res.json(chat2Messages)
})

//route for /chat/chat2 chat room 2 to put new message into the collection
app.post('/chat/chat2', async (req, res) => {
  //assigning the new message to a variable
  const newMessage2 = new ChatMsg2({
    name: req.body.name,
    message: req.body.message
  })

  //saves new message entry
  await newMessage2.save()
})

//creating model for messages from room3 post
const ChatMsg3 = mongoose.model('message3s', Message3)
//send all results as a json to the page for room 2
app.get('/chat3messages', async (req, res) => {
  let chat3Messages = await ChatMsg3.find({})
  res.json(chat3Messages)
})

//route for /chat/chat2 chat room 2 to put new message into the collection
app.post('/chat/chat3', async (req, res) => {
  //assigning the new message to a variable
  const newMessage3 = new ChatMsg3({
    name: req.body.name,
    message: req.body.message
  })

  //saves new message entry
  await newMessage3.save()
})

app.listen(port, () => {
  console.log(`Hey, Dumbo! Keeps those ears open for port ${port}`)
})
