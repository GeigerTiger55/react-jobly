import { Link } from "react-router-dom";

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
    <div>
      <Link to='/'>Jobly</Link>
      <Link to='/companies'>Companies</Link>
      <Link to='/jobs'>Jobs</Link>
    </div>
  );
}

export default Nav;