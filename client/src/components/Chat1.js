//necessary imports
import React from 'react'

//-----First chat room component
export default function Chat1 () {
  //Return renders the appearance of the page
  return (
    <div className='App'>
      <h1>Super Fun Chat App</h1>
      <h2>Welcome to Chat room 1</h2>
      {/* button navigation goes here */}
      {/* div container for chat content with fields for chat messages and edit/delete buttons for each message */}

      {/* This would be a container box with fields for entering a message */}
      <form action='/chat1' method='post'>
        <input type='text' name='username' placeholder='Enter your user name' />
        <input type='text' name='message' placeholder='Enter your message' />
        <input type='text' name='submit' />
      </form>

      {/* Need a container box to edit message  with fields to edit message*/}
    </div>
  )
}
