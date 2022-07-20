import { useState, useParams } from 'react';
import JobCardList from './JobCardList';

/** CompanyDetail shows company info and jobs posted for company *  
 *
 *  Props: 
 * 
 *  State: 
 *  - jobs: [{job},...]
 * 
 * TODO: update state to reflect below:
 * Company is { handle, name, description, numEmployees, logoUrl, jobs }
 *   where jobs is [{ id, title, salary, equity }, ...]
 * 
 *  Params:
 *  - company name
 * 
 *  Routes -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const [jobs, setJobs] = useState([]);
  const { company } = useParams();

  return (
    <div>
      <header>COMPANY DETAIL AND JOBS</header>
      <JobCardList />
    </div>
  );
}
//THINK ABOUT THINGS
// param - company (handle)
//
// state - companyData:
//      isLoading:
//      data: company info:: 
//      { handle, name, description, numEmployees, logoUrl, jobs }
//      jobs is [{ id, title, salary, equity }, ...]
//
// useEffect to get company data (axios call from JoblyApi)
//    only run on mount, call setCompanyData(results from Axios)
//
// return company details (copy company card structure)
//        <JobCardList jobs={company.data.jobs} />


export default CompanyDetail;