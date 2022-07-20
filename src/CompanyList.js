import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';
import JoblyApi from './api';

import { useState, useEffect } from 'react';


/** CompanyList for displaying companies
 *
 * Props: None
 *
 * State:
 * - companies: [{company}, ...]
 * - searchTerms
 *
 * Routes -> CompanyList -> { SearchForm, CompanyCard }
 */

function CompanyList() {
  const [companies, setCompanies] = useState({
    data: [],
    isLoading: true,
  });
  // FIXME: The searchTerms can't be an empty string per the backend.
  const [searchTerms, setSearchTerms] = useState();
  console.log("CompanyList", companies, searchTerms);


  useEffect(function fetchCompaniesOnSearchTermsChange() {
    async function fetchCompanies() {
      const companiesResult = await JoblyApi.getCompanies(searchTerms)
      setCompanies({
        data: companiesResult,
        isLoading: false
      });
    }
    fetchCompanies();
  }, [searchTerms]);


  /** searchCompanies sets searchTerms
   *
   *  Accepts: searchParams object like { name: value, ...}
   */
  function searchCompanies(searchParams) {
    // console.log("searchCompanies",searchParams);

    /**Function _rmvKey takes an obj as parameter
     * Return the same obj ref with all keys whose value '' removed.
     */
    function _rmvKey(obj){
      for(let key in obj){
        if(obj[key] === ''){
          delete obj[key];
        }
      }
      return obj;
    }

    //Filter out keys with '' values.
    searchParams = _rmvKey(searchParams);

    setSearchTerms(searchParams);
  }


  return (
    <div>
      <SearchForm
        searchFunction={searchCompanies}
        searchField='name'
      />
      {companies.isLoading
        ? <p>Loading!</p>
        : companies.data.map(
          company => <CompanyCard key={company.handle} company={company} />
        )
      }
    </div>
  );
}

export default CompanyList;


// THinking Space:
// Have to get the props
// Map the props to create
