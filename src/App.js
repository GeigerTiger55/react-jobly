import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
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


  // TODO:update context
  async function loginUser({username, password}){
    const token = await JoblyApi.loginUser({username, password});
    JoblyApi.token = token;
    setUserData({
      username,
      user: {},
      token
    });
  }
  
  useEffect(function fetchUserDataOnTokenChange(){
    async function fetchUserData(){
      try {
        const userResult = await JoblyApi.getUser({username:userData.username});
        setUserData(uData => ({...uData, user:userResult}));
      } catch(err){
        console.log('fetchUserData', err);
        //TODO: display error message somewhere?
      }
    }
    console.log('useEffect fetchUserDataOnTokenChange', userData.token);
    if(userData.token !== ''){
      fetchUserData();
    }

  }, [userData.token]);

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
