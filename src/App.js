import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import RoutesList from './RoutesList';
import Nav from './Nav';
import JoblyApi from './api';
import userContext from './userContext';
import { TEST_USER } from './testFile';
import './App.css';

//TODO: still need username as separate key?
const DEFAULT_USERDATA = {username: '', user:{}, token:''};

/** App for managing a Jobs Board.
 *
 * Props: None
 * State: None
 *
 * App -> (<Nav/> | <RoutesList/>)
 */
function App() {
  const [userData, setUserData] = useState(DEFAULT_USERDATA);

  //For testing purposes
  // JoblyApi.registerUser(TEST_USER);
  // JoblyApi.loginUser(TEST_USER);

  //loginUser func
  // Accepts: { username, password }
  // API call to JoblyApi.loginUser - to authenticate and get token
  // getUser (to get all user data)
  // update context
  async function loginUser({username, password}){
    //TODO: figure out error catching
    const token = await JoblyApi.loginUser({username, password});
    console.log('loginUser in App', token);
    JoblyApi.token = token;

    const user = await JoblyApi.getUser({username});
    console.log('user data???', user);

    // TODO:
    // Use effect on mount/ token state change
    //

    // TODO:
    // set userContext token value
    // In api.js we import userContext
    // set the static token value to userContext token value.
  }


  //TODO: signupUser func
  function signupUser(){
  }




  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList
          loginUser={loginUser}
          signupUser={signupUser}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
