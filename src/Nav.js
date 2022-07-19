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
function Nav() {
  return (
    <div className='Nav'>
      <Link to='/' className='Nav-Link'> Jobly </Link>
      <ul className='Nav-ul'>
        <li><Link to='/companies' className='Nav-Link'> Companies </Link></li>
        <li><Link to='/jobs' className='Nav-Link'> Jobs </Link></li>
      </ul>
    </div>
  );
}

export default Nav;