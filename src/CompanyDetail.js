import { useState, useParams } from 'react';
import JobCardList from './JobCardList';

/** CompanyDetail shows company info and jobs posted for company *  
 *
 *  Props: 
 * 
 *  State: 
 *  - jobs: [{job},...]
 * 
 *  Params:
 *  - company name
 * 
 *  Routes -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const [jobs, setJobs] = useState([]);

  return (
    <div>
      <header>COMPANY DETAIL AND JOBS</header>
      <JobCardList />
    </div>
  );
}

export default CompanyDetail;