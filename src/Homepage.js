import { useContext } from "react";
import userContext from './userContext';
import { Link } from "react-router-dom";
import './Homepage.css';

/** Homepage for landing and redirects (presentational)
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * Routes -> Homepage
 */

function Homepage() {
  const { userData } = useContext(userContext);

  //Show links dependent on if user is signed in
  if (userData.username) {
    return (
      <div className="Homepage">
        <div className="Homepage-text">
          <h1>Jobly</h1>
          <h4>All the jobs in one, convenient place.</h4>
          <h3>Welcome Back, {userData.firstName}</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Homepage">
        <div className="Homepage-text">
          <h1>Jobly</h1>
          <h4>All the jobs in one, convenient place.</h4>
          <div>
            <Link to='/login' className='Homepage-btn btn btn-primary'>
              Login 
            </Link>
            <Link to='/signup' className='Homepage-btn btn btn-primary'>
              Sign Up 
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;