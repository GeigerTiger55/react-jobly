import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';
import JoblyApi from './api';

import { useState, useEffect } from 'react';


/** CompanyList for displaying companies
 *
 * Props: None
 *
 * State:
 * - companies: {
    data: [{company},...],
    isLoading: true,
  }

  * - searchTerms: {name}
 *
 * Routes -> CompanyList -> { SearchForm, CompanyCard }
 */

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
   *  Accepts: searchParams object like { name: value, ...}
   */
  function searchCompanies(searchParams) {
    // console.log("searchCompanies",searchParams);

    /**Function _rmvKey takes an obj as parameter
     * Return a new obj ref with all keys whose value '' removed.
     * TODO: filter obj.entries
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
