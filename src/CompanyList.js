import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';

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
  return (
    <div>
      <header>COMPANY LISTER</header>
      <SearchForm />
      <CompanyCard />
    </div>
  );
}

export default CompanyList;