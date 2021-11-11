//----Necessary imports
import { BrowserRouter, Route, Routes } from 'react-router-dom' //sets up React Router
import './App.css'

//App function to render page structural elements and BrowserRouter/Routes
function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <div className='App'>
            <h1>Super Fun Chat App</h1>
          </div>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
