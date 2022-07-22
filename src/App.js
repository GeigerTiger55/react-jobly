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

    // Add TRY/ CATCH that triggers the return value.
    // return {errors:[]}

    const token = await JoblyApi.loginUser({username, password});


    // try{
    //   token = await JoblyApi.loginUser({username, password});

    // } catch (error){
    //   return error;
    // }
    console.log('loginUser in App', token);

    // If token is errors Throw!


    JoblyApi.token = token;

    const user = await JoblyApi.getUser({username});
    console.log('user data???', user);

    // TODO:
    // Use effect on mount/ token state change
    // That will make the JoblyApi.getUser call
    // useEffect boilerplate
    // callback with inner async function
    // Try and catch that logs information either way








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
