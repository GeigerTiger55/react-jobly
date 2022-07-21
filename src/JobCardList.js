import JobCard from './JobCard';

/** JobCardList for displaying jobs
 *
 * Props:
 * - jobs: [{id, title, salary, equity, company...}, ...]
 *
 * {CompanyDetail, JobList} -> JobCardList -> JobCard
 *
 * Will error if no jobs passed.
 */
function JobCardList({ jobs }) {
  return (
    <div>
      {jobs.map(job => <JobCard key={job.id} job={job} />)}
    </div>
  );
}

export default JobCardList;
