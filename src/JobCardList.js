import JobCard from './JobCard';

/** JobCardList for displaying jobs
 *
 * Props:
 * - jobs: [{title, salary, equity, company...}, ...]
 *
 * {CompanyDetail, JobList} -> JobCardList -> JobCard
 */

function JobCardList() {
  return (
    <div>
      <header>JOB CARD LISTER</header>
      <JobCard />
    </div>
  );
}

export default JobCardList;