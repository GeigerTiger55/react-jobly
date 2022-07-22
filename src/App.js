import { BrowserRouter, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RoutesList from './RoutesList';
import Nav from './Nav';
import JoblyApi from './api';
import userContext from './userContext';
import { TEST_USER } from './testFile';

import './App.css';

//TODO: still need username as separate key?
const DEFAULT_USERDATA = { username: '', user: {}, token: '' };

/** App for managing a Jobs Board.
 *
 * Props: None
//  * FIXME: Add state
 * State: None
 *
 * App -> (<Nav/> | <RoutesList/>)
 */
function App() {
  //FIXME: 2 pieces of state
  //1.) userData
  //2.) token
  const [userData, setUserData] = useState(DEFAULT_USERDATA);
  console.log('App, userData', userData);
  //For testing purposes
  // JoblyApi.registerUser(TEST_USER);
  // JoblyApi.loginUser(TEST_USER);

  useEffect(function fetchUserDataOnTokenChange() {
    //FIXME: jwtDecode library. Decode token and pull out username.
    async function fetchUserData() {
      try {
        const userResult = await JoblyApi.getUser({ username: userData.username });
        setUserData(uData => ({ ...uData, user: userResult }));
      } catch (err) {
        console.log('fetchUserData', err);
        //TODO: display error message somewhere?
      }
    }
    console.log('useEffect fetchUserDataOnTokenChange', userData.token);
    if (userData.token !== '') {
      fetchUserData();
    }
    // FIXME:
  }, [userData.token]);

  /** loginUser takes an object of {username, password} as argument
   * sets token state via setUserData(newTokenValue)
   */
  async function loginUser({ username, password }) {
    const token = await JoblyApi.loginUser({ username, password });
    //FIXME: Move to Jobly.api class. LocalStorage incoming
    JoblyApi.token = token;
    setUserData({
      username,
      user: {},
      token
    });
  }

  /** signUpUser takes an object of userData as argument
   * Like: { username, password, firstName, lastName, email }
   * sets token state via setUserData(newTokenValue)
   */
  async function signupUser({
    username,
    password,
    firstName,
    lastName,
    email,
  }) {
    const token = await JoblyApi.registerUser(
      // FIXME: Formatting
      { username, password, firstName, lastName, email }
    );
    // FIXME: move to API, localStorage incoming.
    JoblyApi.token = token;
    setUserData({
      username,
      user: {},
      token
    });
  }

  // We check if a user is logged in via context
  // If so on these form pages
  //We render the <Navigate to="/companies"> component

  /** logoutUser - sets UserData to default userdata */
  function logoutUser() {
    setUserData(DEFAULT_USERDATA);
  }

  //TODO: write patch user function
  // FIXME: Passing just userData not token

  return (
    <userContext.Provider value={{ userData }}>
      <div className="App">
        <BrowserRouter>
          <Nav logoutUser={logoutUser} />
          <RoutesList
            loginUser={loginUser}
            signupUser={signupUser}
          />
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
