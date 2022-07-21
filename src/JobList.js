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
 *  Accepts: searchParams object like { title: value, ...}
 */
  function searchJobs(searchParams) {
    // console.log("searchCompanies",searchParams);

    //TODO: Move _rmvKey to a helperFunc file.
    // Same Func present in CompanyList
    /**Function _rmvKey takes an obj as parameter
     * Return a new obj ref with all keys whose value '' removed.
     */
    function _rmvKey(obj) {
      const newObj = { ...obj };
      for (let key in newObj) {
        if (newObj[key] === '') {
          delete newObj[key];
        }
      }
      return newObj;
    }

    //Filter out keys with '' values.
    searchParams = _rmvKey(searchParams);

    setSearchTerms(searchParams);
  }
  console.log("Jobs.data.length",jobs.data.length);
  return (
    <div>
      <SearchForm searchFunction={searchJobs} searchField={"title"} />
      {jobs.data.length > 0
      ? <JobCardList jobs={jobs.data} />
      : <p>No Jobs!</p>}
    </div>
  );
}

export default JobList;


