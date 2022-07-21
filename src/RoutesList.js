import { Routes, Route, Navigate } from 'react-router-dom';
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
 * - none
 *
 * State:
 * - none
 *
 * App -> RoutesList -> { Homepage, CompanyList, CompanyDetail, JobList }
 */

function RoutesList() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/signup' element={<SignupForm />} />
      <Route path='/profile' element={<UserProfile />} />
      <Route path='/companies' element={<CompanyList />} />
      <Route path='/companies/:companyHandle' element={<CompanyDetail />} />
      <Route path='/jobs' element={<JobList />} />
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  );
}

export default RoutesList;


