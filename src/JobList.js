import { useState } from 'react';
import JobCardList from './JobCardList';
import SearchForm from './SearchForm';

import JoblyApi  from './api';

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

  const jobsList = JoblyApi.getJobs("camera");
  console.log(jobsList)

  return (
    <div>
      <header>JOB LISTER</header>
      <SearchForm />
      <JobCardList />
    </div>
  );
}

export default JobList;