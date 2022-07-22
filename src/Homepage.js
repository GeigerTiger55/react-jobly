import { useContext } from "react";
import userContext from './userContext';
import { Link } from "react-router-dom";

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
      <div>
        <h1>Jobly</h1>
        <h4>All the jobs in one, convenient place.</h4>
        <h1>WelcomeBack, {userData.user.firstName}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Jobly</h1>
        <h4>All the jobs in one, convenient place.</h4>
        <div>
          <Link to='/login' className='btn btn-primary'> Login </Link>
          <Link to='/signup' className='btn btn-primary'> Sign Up </Link>
        </div>
      </div>
    );
  }
}

export default Homepage;