import { BrowserRouter, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RoutesList from './RoutesList';
import Nav from './Nav';
import JoblyApi from './api';
import userContext from './userContext';
import { TEST_USER } from './testFile';

import './App.css';

/** App for managing a Jobs Board.
 *
 * Props: None
//  * FIXME: Add state
 * State: None
 *
 * App -> (<Nav/> | <RoutesList/>)
 */
function App() {

  //


  //FIXME: 2 pieces of state
  //1.) userData
  //2.) token

  const [token, setToken] = useState(
    window.localStorage.getItem("jobly-token") ?
    window.localStorage.getItem("jobly-token") :
    ''
    );
  const [userData, setUserData] = useState({});
  console.log('App, userData', userData);
  //For testing purposes
  // JoblyApi.registerUser(TEST_USER);
  // JoblyApi.loginUser(TEST_USER);

  useEffect(function fetchUserDataOnTokenChange() {
    //FIXME: jwtDecode library. Decode token and pull out username.
    async function fetchUserData() {
      try {
        const userResult = await JoblyApi.getUser({ username: userData.username });
        setUserData(userResult);
      } catch (err) {
        console.log('fetchUserData', err);
        //TODO: display error message somewhere?
      }
    }
    console.log('useEffect fetchUserDataOnTokenChange', token);
    if (token !== '') {
      fetchUserData();
    }
    // FIXME:
  }, [token]);

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
    setUserData({});
  }

  //TODO: write patch user function

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
