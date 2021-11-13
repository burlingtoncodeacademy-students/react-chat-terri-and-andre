//----Necessary imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chat1 from './components/Chat1.js'
import Chat2 from './components/Chat2.js'
import Chat3 from './components/Chat3.js'
import Home from './components/Home.js'

//This makes the paths needed for our chat rooms
function App () {
  return (
    //React fragment (instead of <div>)
    <>
      <BrowserRouter>
        <Routes>
          {/* Path shows the path for the page and element refers to the component */}
          <Route path='/' element={<Home />} />
          <Route path='/chat1' element={<Chat1 />} />
          <Route path='/chat2' element={<Chat2 />} />
          <Route path='/chat3' element={<Chat3 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
