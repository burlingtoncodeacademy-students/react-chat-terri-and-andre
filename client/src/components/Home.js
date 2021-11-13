//----Necessary imports

import '../styles/App.css'
import HomeNav from './HomeNav.js'
import Chatting from './Chatting.js'

//Home function to render page structural elements
export default function Home () {
  return (
    //React fragment (instead of <div>)
    <>
      <div class='wrapper'>
        {/* Page title div */}
        <div class='page-header'>
          <h1>React Chat App</h1>
        </div>

        <div class='page-main'>
          {/* Button navigation div */}
          <div id='button-nav'>
            {/* Importing ButtonNav component */}
            <HomeNav />
            {/* image for main page goes here */}
            <Chatting />
          </div>
        </div>
        <footer class='page-footer'>
          Andre and Terri's Super Cool Chat App &copy;
        </footer>
      </div>
    </>
  )
}
