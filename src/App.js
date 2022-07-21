import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Nav from './Nav';

import './App.css';

import { TEST_USER } from './testFile';
import JoblyApi from './api';

/** App for managing a Jobs Board.
 *
 * Props: None
 * State: None
 *
 * App -> (<Nav/> | <RoutesList/>)
 */
function App() {

  //For testing purposes
  // JoblyApi.registerUser(TEST_USER);
  // JoblyApi.loginUser(TEST_USER);






  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
