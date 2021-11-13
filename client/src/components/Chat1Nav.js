import { Link } from 'react-router-dom'
import '../styles/App.css'

//--------Chat room navigation buttons Function to display navigation buttons with links
//Export default exports this to other components
export default function Chat1Nav (props) {
  return (
    <>
      {/* List item links to individual chat rooms--will style these as buttons */}
      <div id='nav-wrapper'>
        <ul id='nav'>
          <div id='room-title'>
            <h2>Welcome to Chat Room 1!</h2>
          </div>
          <li>
            <Link to='/chat1'>Chat Room 1</Link>
          </li>
          <li>
            <Link to='/chat2'>Chat Room 2</Link>
          </li>
          <li>
            <Link to='/chat3'>Chat Room 3</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
