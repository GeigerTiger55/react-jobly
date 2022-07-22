import { useContext } from "react";
import userContext from './userContext';
import { Link } from "react-router-dom";
import './Nav.css';

/**Shows navigation bar
 *
 * Props:
 * - logoutUser: function from App to logout the user
 *
 * State:
 * - none
 *
 * App -> Nav
 */
function Nav({ logoutUser }) {
  const { userData } = useContext(userContext);

  return (
    <div className='Nav'>
      <div className='Nav-leftDiv'>
        <Link to='/' className='Nav-Link'> Jobly </Link>
      </div>
      {userData.username
        ? (
          <div className='Nav-rightDiv'>
            <Link to='/companies' className='Nav-Link'> Companies </Link>
            <Link to='/jobs' className='Nav-Link'> Jobs </Link>
            <Link to='/profile' className='Nav-Link'> Profile </Link>
            <Link to='/' onClick={logoutUser} className='Nav-Link'>
               Logout, {userData.username}
            </Link>
          </div>
        )
        : (
          <div className='Nav-rightDiv'>
            <Link to='/login' className='Nav-Link'> Login </Link>
            <Link to='/signup' className='Nav-Link'> Sign Up </Link>
          </div>
        )}
    </div>
  );
}

export default Nav;

// displayLinks(){ if userData.token return (companies, jobs, profile, log)
// else return (login, signup)}