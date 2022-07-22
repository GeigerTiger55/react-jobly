import { Link } from "react-router-dom";
import './Nav.css';

/**Shows navigation bar
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App -> Nav
 */
function Nav({ logoutUser }) {
  return (
    <div className='Nav'>
      <Link to='/' className='Nav-Link'> Jobly </Link>
      <ul className='Nav-ul'>
        <li><Link to='/login' className='Nav-Link'> Login </Link></li>
        <li><Link to='/signup' className='Nav-Link'> Sign Up </Link></li>
        <li><Link to='/companies' className='Nav-Link'> Companies </Link></li>
        <li><Link to='/jobs' className='Nav-Link'> Jobs </Link></li>
        <li><Link to='/profile' className='Nav-Link'> Profile </Link></li>
        <li><Link to='/' onClick={logoutUser} className='Nav-Link'> Logout </Link></li>
      </ul>
    </div>
  );
}

export default Nav;