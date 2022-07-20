import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';
import JoblyApi from './api';

/** CompanyList for displaying companies
 *
 * Props:
 * - companies: [{company}, ...]
 *
 * State:
 * - searchTerms
 *
 * Routes -> CompanyList -> { SearchForm, CompanyCard }
 */

function CompanyList() {

  const companies = JoblyApi.getCompanies("Anderson");
  // console.log('CompanyList component',companies);

  // TODO: useState()
  // TODO: useEffect()


  return (
    <div>
      <header>COMPANY LISTER</header>

      <SearchForm />
      <CompanyCard />
    </div>
  );
}

export default CompanyList;