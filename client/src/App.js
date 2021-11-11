//----Necessary imports
import { BrowserRouter, Route, Routes } from 'react-router-dom' //sets up React Router
import './App.css'
import Chat1 from 'components/Chat1.js'
import Chat2 from 'components/Chat2.js'

//App function to render page structural elements and BrowserRouter/Routes
function App () {
  return (
    <>
      <h1>React Chat App</h1>
      <h2>Click a button to join a chat room!</h2>

      {/* button navigation to rooms goes here */}
      {/* image for main page goes here */}
    </>
  )
}

export default App
