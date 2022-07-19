import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';

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

 function RoutesList(){
  return (
  <Routes>
    <Route path='/companies' element={<CompanyList />} />
    <Route path='/companies/:company' element={<CompanyDetail />} />
    <Route path='/jobs' element={<JobList />} />
    <Route path='/*' element={<Homepage />} />
  </Routes>
  );
}

export default RoutesList;