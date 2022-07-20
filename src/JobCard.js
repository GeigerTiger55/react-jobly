import './JobCard.css';

/** JobCard for presenting job infor
 *
 * Props:
 * - job: (from JobList) { id, title, salary, equity, companyHandle, companyName }
 *    OR  (from CompanyDetail) { id, title, salary, equity }
 *
 * JobCardList -> JobCard
 */

const TEST_JOB = {
  "id": 1,
  "title": "Conservator, furniture",
  "salary": 110000,
  "equity": "0"
};

function JobCard({ job = TEST_JOB }){
  return (
      <div className='JobCard'>
        <h3 className='JobCard-title'>{job.title}</h3>
        { job.companyHandle && <h4 className='JobCard-company'>{job.companyName}</h4>}
        <p className='JobCard-salary'>Salary: {job.salary}</p>
        <p className='JobCard-equity'>Equity: {job.equity}</p>
      </div>
  );
}

export default JobCard;