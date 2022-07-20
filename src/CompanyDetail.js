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
      isLoading: true
  }
 *
 *  Params:
 *  - company name
 *
 *  Routes -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const [companyDetails, setCompanyDetails] = useState({
    data: {},
    isLoading: true
  });
  const { company } = useParams();

  useEffect(function fetchCompanyDetailsOnMount() {
    async function fetchCompanyDetails() {
      const companyResult = await JoblyApi.getCompany(company);
      setCompanyDetails({
        data: companyResult,
        isLoading: false
      });
    }
    fetchCompanyDetails();
  }, []);

  return (
    <div>

      <div className='CompanyDetail'>
        <div className='CompanyDetail-name'>{companyDetails.data.name}</div>
        <p className='CompanyDetail-description'>
          {companyDetails.data.description}
        </p>
      </div>

      <JobCardList jobs={companyDetails.data.jobs} />
    </div>
  );
}

export default CompanyDetail;
