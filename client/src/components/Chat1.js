//necessary imports
import React from 'react'
import { useState, useEffect } from 'react' //import hooks from React
import { Link } from 'react-router-dom'
import '../styles/App.css'
import Chat1Nav from './Chat1Nav.js'

//-----First chat room component
export default function Chat1 () {
  //Return renders the appearance of the page
  //uses state to hold the result of the fetch
  // const [allMessages, setAllMessages] = useState([])

  // useEffect(() => {
  //   //fetch information from MongoDb database endpoint
  //   fetch('http://localhost:5000/allmessages')
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(json => {
  //       setAllMessages(json)
  //     })
  // }, [])
  return (
    <div class='wrapper'>
      {/* Page title div */}
      <div class='page-header'>
        <h1>React Chat App</h1>
      </div>

      <div class='page-main'>
        {/* Button navigation div */}
        <div id='button-nav'>
          {/* Importing ButtonNav component */}
          <Chat1Nav />
        </div>
        <div id='img-chat-wrap'>
          <div id='chat-window'>
            <div>chat messages go here</div>
          </div>
        </div>
        <div id='input-field-wrap'>
          <h3>Type your Name and send:</h3>

          {/* Input from user to go to the database */}
          <div id='input-text'>Name input goes here</div>
          <ul id='send'>
            <li>
              {/* Sends input text to db */}
              <Link to='/chat1'>Send</Link>
            </li>
          </ul>
        </div>
        <div id='input-field-wrap'>
          <h3>Type your Message and send:</h3>
          {/* Input from user to go to the database */}
          <div id='input-text'>text input goes here</div>
          <ul id='send'>
            <li>
              {/* Sends input text to db */}
              <Link to='/chat1'>Send</Link>
            </li>
          </ul>
        </div>
        <footer class='page-footer'>
          Andre and Terri's Super Cool Chat App &copy;
        </footer>
      </div>
    </div>
  )
}
