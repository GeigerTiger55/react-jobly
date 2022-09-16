import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RoutesList from './RoutesList';
import Nav from './Nav';
import JoblyApi from './api';
import userContext from './userContext';
import jwt_decode from "jwt-decode";
import './App.css';

/** App for managing a Jobs Board.
 *
 * Props: None
 * 
 * State: 
 * - token
 * - userData like {username, token}
 *
 * App -> { userContext.Provider, Nav, RoutesList }
 */
function App() {
  const [token, setToken] = useState(
    window.localStorage.getItem("jobly-token") || ''
  );
  const [userData, setUserData] = useState({});
  console.log('App, token, userData',token,userData);

  useEffect(function fetchUserDataOnTokenChange() {
    async function fetchUserData() {
      const username = jwt_decode(token).username;

      console.log("useEffect", username);

      try {
        const userResult = await JoblyApi.getUser({username, token});
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
  }, [token]);

  /** loginUser takes an object of {username, password} as argument
   * sets token state via setUserData(newTokenValue)
   */
  async function loginUser({ username, password }) {
    const token = await JoblyApi.loginUser({ username, password });
    window.localStorage.setItem("jobly-token", token);
    setToken(token);
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
    const token = await JoblyApi.registerUser({ 
      username, 
      password, 
      firstName, 
      lastName, 
      email,
    });
    window.localStorage.setItem("jobly-token", token);
    setToken(token);
  }

  /** logoutUser - clears all user info
   * - remove token from everywhere
   * - clear userData
   */
  function logoutUser() {
    window.localStorage.removeItem("jobly-token");
    setToken('');
    setUserData({});
  }

  //TODO: write patch user function for updating profile

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
