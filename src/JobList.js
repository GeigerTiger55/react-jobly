import { useState, useEffect } from 'react';
import JobCardList from './JobCardList';
import SearchForm from './SearchForm';

import JoblyApi from './api';

/** JobCardList for displaying jobs
 *
 *  Props: none
 *
 *  State:
 *  - jobs: {
    data: [{job},...],
    isLoading: true,
    }
 *  - searchTerms: {title}
 *
 *  Routes -> JobList -> { JobCardList, SearchForm }
 */
//TODO: Refresh job list when clicking on the Jobs link from Nav bar

function JobList() {
  const [jobs, setJobs] = useState({
    data: [],
    isLoading: true,
  });

  const [searchTerms, setSearchTerms] = useState({});

  useEffect(function fetchJobsOnSearchTermsChange() {
    (async function fetchJobs() {
      const jobsResult = await JoblyApi.getJobs(searchTerms);
      setJobs({
        data: jobsResult,
        isLoading: false
      });
    })();
    // fetchJobs();
  }, [searchTerms]);

  /** searchJobs sets searchTerms
 *
 *  Accepts: searchParams "string value" from form
 *  Calls setSearchTerms with an obj like: {title:"string"}
 */

  function searchJobs(searchQuery) {
    const searchParams = searchQuery ? { title: searchQuery } : {};

    setSearchTerms(searchParams);
  }

  return (
    <div>
      <SearchForm searchFunction={searchJobs} />
      {jobs.data.length > 0
        ? <JobCardList jobs={jobs.data} />
        : <p>No Jobs!</p>}
    </div>
  );
}

export default JobList;


