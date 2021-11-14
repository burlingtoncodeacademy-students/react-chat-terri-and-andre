//necessary imports
import React from 'react'
import { useState, useEffect } from 'react' //import hooks from React
import '../styles/App.css'
import Chat1Nav from './Chat1Nav.js'

//-----First chat room component
export default function Chat1 () {
  //Page refreshes every 10 seconds

  //state to handle set interval
  const [pageUpdate, setPageUpdate] = useState(0)
  function chatRefresher (num) {
    let intervalId = setInterval(tick, 1000)

    function tick () {
      console.log(num)
      num = num - 1
      if (num <= 0) {
        //update state of setPageUpdate so it triggers useEffect to run again
        window.location.reload()
        clearInterval(intervalId)
      }
    }
  }
  chatRefresher(10)
  //uses state to hold the result of the fetch
  const [allMessages, setAllMessages] = useState([])

  useEffect(() => {
    //fetch information from MongoDb database endpoint
    fetch('/allmessages')
      .then(res => {
        return res.json()
      })
      // returned data is put into setAllMessages callback
      .then(json => {
        setAllMessages(json)
      })
  }, [pageUpdate])
  //Return renders the appearance of the page
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
            <div id='chat-messages'>
              <h4>Here's the scoop:</h4>
              {/* renders the messages to the chat window */}
              {allMessages.map(msg => {
                return (
                  <div key={msg._id}>
                    <div>
                      {msg.name} says: {msg.message}
                    </div>
                    <div>posted: {Date.now()}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div id='input-field-wrap'>
          <div id='input-text'>
            {/* Enter name and message */}
            <form action='/chat' method='POST'>
              <div id='user-name'>
                <input
                  type='text'
                  name='name'
                  placeholder='Enter your user name'
                />
              </div>
              <div id='user-message'>
                <input
                  type='text'
                  name='message'
                  placeholder='Enter your message'
                />
                <input type='submit' />
              </div>
            </form>
            <div></div>
            <footer class='page-footer'>
              Andre and Terri's Super Cool Chat App &copy;
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
