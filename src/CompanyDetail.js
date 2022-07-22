import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './api';
import JobCardList from './JobCardList';

/** CompanyDetail shows company info and jobs posted for company
 *
 *  Props: None
 *
 *  State:
 *  - companyDetails: {
      data: { handle, name, description, numEmployees, logoUrl, jobs },
              where jobs is [{ id, title, salary, equity }, ...],
      isLoading: true,
      errorMessages: [err,...]
  }
 *  Params:
 *  - companyHandle
 *
 *  Routes -> CompanyDetail -> JobCardList
 * 
 * Returns error messages if invalid companyHandle
 */

function CompanyDetail() {
  const [companyDetails, setCompanyDetails] = useState({
    data: {},
    isLoading: true,
    errorMessages: [],
  });
  const { companyHandle } = useParams();

  useEffect(function fetchCompanyDetailsOnCompanyHandleChange() {
    async function fetchCompanyDetails() {
      try {
        const companyResult = await JoblyApi.getCompany(companyHandle);
        setCompanyDetails({
          data: companyResult,
          isLoading: false,
          errorMessages: [],
        });
      } catch (err) {
        console.log('ERROR', err);
        setCompanyDetails({
          data: {},
          isLoading: false,
          errorMessages: err,
        });
      }
    }

    fetchCompanyDetails();
  }, [companyHandle]);

  // console.log(companyDetails.data.jobs)

  /**Function displayJobs() takes no parameters
   * Returns jsx of either:
   *  - <p>loading Jobs</p>
   *  - <p>No jobs</p>
   *  - <JobCardList jobs={companyDetails.data.jobs}/>
   */
  function displayJobs() {
    if (companyDetails.isLoading) {
      return <p>loading Jobs</p>;
    } else if (companyDetails.data.jobs.length > 0) {
      return <JobCardList jobs={companyDetails.data.jobs} />;
    } else {
      return <p>No jobs</p>;
    }

  }

  if (companyDetails.errorMessages.length > 0) {
    return <div>{companyDetails.errorMessages.map(err => <p>{err}</p>)}</div>;
  }

  return (
    <div>

      <div className='CompanyDetail'>
        <div className='CompanyDetail-name'>{companyDetails.data.name}</div>
        <p className='CompanyDetail-description'>
          {companyDetails.data.description}
        </p>
      </div>
      {displayJobs()}
    </div>
  );
}

export default CompanyDetail;
