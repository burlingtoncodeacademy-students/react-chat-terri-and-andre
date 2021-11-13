import React from 'react'
import Chatting1 from '../images/Chatting1.png' // Tell webpack this JS file uses this image

function Chatting () {
  // Import result is the URL of your image
  return (
    <img
      src={Chatting1}
      alt='Graphic of people communicating online'
      width='400'
      height='400'
    />
  )
}

export default Chatting
