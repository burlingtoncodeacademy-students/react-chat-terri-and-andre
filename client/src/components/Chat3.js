//necessary imports
import React from 'react'
import { useState, useEffect } from 'react' //import hooks from React
import '../styles/App.css'
import Chat3Nav from './Chat3Nav.js'

//-----First chat room component
export default function Chat3 () {
  //state to handle set interval
  const [pageUpdate, setPageUpdate] = useState(0) //starts at zero
  //chat refresher function for refreshing page
  function chatRefresher (num) {
    //create variable that sets the interval to do what function specifies every 10 seconds
    let intervalId = setInterval(tick, 1000)
    //tick function acts when the countdown above finishes
    function tick () {
      //num declared and conditional to trigger action when countdown hits zero
      num = num - 1
      if (num <= 0) {
        //function to load the page and then interval is cleared
        window.location.reload()
        clearInterval(intervalId)
      }
    }
  }
  chatRefresher(10) //page refresher starts countdown from 10

  //use state to hold the result of the fetch
  const [chat3Messages, setChat3Messages] = useState([])

  useEffect(() => {
    //fetch information from MongoDb database endpoint
    fetch('/chat3messages')
      .then(res => {
        return res.json()
      })
      // returned data is put into setChat3Messages callback
      .then(json => {
        setChat3Messages(json)
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
          <Chat3Nav />
        </div>
        <div id='img-chat-wrap'>
          <div id='chat-window'>
            <div id='chat-messages'>
              <h4>Here's the scoop:</h4>
              {/* renders the messages to the chat window by mapping over the array and returning the each message value when called by msg. followed by relevant array key*/}
              {chat3Messages.map(msg => {
                return (
                  <div key={msg._id}>
                    <div>
                      {msg.name} says:{msg.message}
                    </div>
                    <div>posted: {msg.date}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div id='input-field-wrap'>
          <div id='input-text'>
            {/* Enter name and message */}
            <form action='/chat/chat3' method='POST'>
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
