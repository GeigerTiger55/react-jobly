import { useState } from 'react';
import JobCardList from './JobCardList';
import SearchForm from './SearchForm';

/** JobCardList for displaying jobs
 *
 *  Props: none
 * 
 *  State: 
 *  - jobs: [{job},...]
 *  - searchTerms
 * 
 *  Routes -> JobList -> { JobCardList, SearchForm }
 */

function JobList() {
  const [jobs, setJobs] = useState([]);

  return (
    <div>
      <header>JOB LISTER</header>
      <SearchForm />
      <JobCardList />
    </div>
  );
}

export default JobList;