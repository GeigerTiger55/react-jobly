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
 * - FIXME: Add function as props
 *
 * State:
 * - none
 *
 * App -> RoutesList -> { Homepage, CompanyList, CompanyDetail, JobList }
 */

function RoutesList({ loginUser, signupUser }) {
  const { userData } = useContext(userContext);
  //FIXME: Conditonal to user obj {} not token
  if (userData.token) {
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
        <Route path='/login' element={<LoginForm sendUserData={loginUser} />} />
        <Route path='/signup' element={<SignupForm sendUserData={signupUser} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    );
  }
}

export default RoutesList;


