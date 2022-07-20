import './CompanyCard.css';
import { Link } from 'react-router-dom';

/** CompanyCard for presenting company info
 *
 * Props:
 * - company: {handle, name, num_employees, description, logo_url}
 *
 * CompanyList -> CompanyCard
 */
const TEST_COMPANY = {
  handle: "anderson-arias-morrow",
  name: "Anderson, Arias and Morrow",
  description: "Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.",
  numEmployees: 245,
  logoUrl: "/logos/logo3.png"
};

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


// Clair's Thinking Space
/**
 * for showing detail on a company
 * Displays the name, description, logo URL.
 *
 * Added the logos folder to public folder from a solution (Which?)
 *
 *
 * LogoUrl
 *
 * Reference:
 * 	{
      "handle": "anderson-arias-morrow",
      "name": "Anderson, Arias and Morrow",
      "description": "Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.",
      "numEmployees": 245,
      "logoUrl": "/logos/logo3.png"
    }
 */