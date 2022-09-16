import { useState, useEffect } from 'react';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';
import JoblyApi from './api';
import './CompanyList.css';

/** CompanyList for displaying companies
 *
 * Props: None
 *
 * State:
 * - companies: {
    data: [{company},...],
    isLoading: true,
    errorMessages: [err,...]
  }
 * - searchTerms: {name}
 *
 * Routes -> CompanyList -> { SearchForm, CompanyCard }
 */
  //TODO: Refresh company list when clicking on the Companies link from Nav bar

function CompanyList() {
  const [companies, setCompanies] = useState({
    data: [],
    isLoading: true,
  });
  //ChangeLog: Giving searchTerms a defualt value
  const [searchTerms, setSearchTerms] = useState({});
  // console.log("CompanyList", companies, searchTerms);

  useEffect(function fetchCompaniesOnSearchTermsChange() {
    async function fetchCompanies() {
      const companiesResult = await JoblyApi.getCompanies(searchTerms);
      setCompanies({
        data: companiesResult,
        isLoading: false
      });
    }
    fetchCompanies();
  }, [searchTerms]);

  /** searchCompanies sets searchTerms
   *
   *  Accepts: searchParams "string value" from form
   *  Calls setSearchTerms with an obj like: {name:"string"}
   */

  function searchCompanies(searchQuery) {
    const searchParams = searchQuery? {name:searchQuery} : {};

    setSearchTerms(searchParams);
  }

  return (
    <div className='CompanyList'>
      <SearchForm
        searchFunction={searchCompanies}
      />
      <div className='CompanyList-cards'>
      {companies.isLoading
        ? <p>Loading...</p>
        : companies.data.map(
          company => <CompanyCard key={company.handle} company={company} />
        )
      }
      </div>
    </div>
  );
}

export default CompanyList;
