import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from "react";
import userContext from './userContext';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import UserProfile from './UserProfile';


/** Routes to navigate pages
 *
 * Props:
 * - loginUser: function from App to logout the user, passed to LoginFrom
 * - signupUser: function from App to sign up a new user, passed to SignupForm
 *
 * State:
 * - none
 *
 * App -> RoutesList -> { 
 *  Homepage, 
 *  LoginForm, 
 *  SignupForm, 
 *  UserProfile, 
 *  CompanyList, 
 *  CompanyDetail, 
 *  JobList 
 * }
 * 
 */

function RoutesList({ loginUser, signupUser }) {
  const { userData } = useContext(userContext);
  if (userData.username) {
    return (
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/companies' element={<CompanyList />} />
        <Route path='/companies/:companyHandle' element={<CompanyDetail />} />
        <Route path='/jobs' element={<JobList />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginForm loginUser={loginUser} />} />
        <Route path='/signup' element={<SignupForm signupUser={signupUser} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    );
  }
}

export default RoutesList;


