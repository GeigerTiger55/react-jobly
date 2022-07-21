import './CompanyCard.css';
import { Link } from 'react-router-dom';
import {TEST_COMPANY} from './testFile';

/** CompanyCard for presenting company info
 *
 * Props:
 * - company: {handle, name, num_employees, description, logo_url}
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ company = TEST_COMPANY }) {

  return (
    <Link to={`/companies/${company.handle}`} className={'Nav-Link'}>
      <div className='CompanyCard'>
        <div className='CompanyCard-name'>{company.name}
          {company.logoUrl
            && <img src={company.logoUrl}
              alt={company.name}
              className='CompanyCard-img' />
          }
        </div>
        <p className='CompanyCard-description'>{company.description}</p>
      </div>
    </Link>
  );
}

export default CompanyCard;
