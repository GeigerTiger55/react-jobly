import './JobCard.css';
import { TEST_JOB } from './testFile';

/** JobCard for presenting job infor
 *
 * Props:
 * - job: (from JobList) {id, title, salary, equity, companyHandle, companyName}
 *    OR  (from CompanyDetail) { id, title, salary, equity }
 *
 * JobCardList -> JobCard
 */

function JobCard({ job = TEST_JOB }) {
  return (
    <div className='JobCard'>
      <h3 className='JobCard-title'>{job.title}</h3>
      {job.companyHandle
        && <h4 className='JobCard-company'>{job.companyName}</h4>}
      <p className='JobCard-salary'>Salary: {job.salary}</p>
      <p className='JobCard-equity'>Equity: {job.equity}</p>
    </div>
  );
}

export default JobCard;