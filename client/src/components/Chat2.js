//necessary imports
import React from 'react'

//-----First chat room component
export default function Chat2 () {
  //Return renders the appearance of the page
  return (
    <div className='App'>
      <h1>Super Fun Chat App</h1>
      <h2>Welcome to Chat room 2</h2>
      <form action='/chat2' method='post'>
        <input type='text' name='username' placeholder='Enter your user name' />
        <input type='text' name='message' placeholder='Enter your message' />
        <input type='text' name='submit' />
      </form>
    </div>
  )
}
