import React from 'react'
import { useNavigate } from 'react-router-dom'
import JobsCard from './JobsCard';
import Loader from './Loader';

const DisplayAllJobs = ({isLoading, job, title}) => {
  console.log(job)
    const navigate = useNavigate();

    const handleNavigate = (job) => {
        navigate(`/jobs-details/${job.skill}`, { state: job})
    }
  return (
    <div className=' mx-9 w-full mt-9'>
      <h1 className='font-ClashDisplay-Regular text-green-600 text-lg font-bold text-left'>
        {title} ({job.length})
      </h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center'>
        {isLoading && (
        <Loader />
        )}
        {isLoading && job.length === 0 && (
          <p className='text-lg font-bold text-center font-ClashDisplay-Regular'>
            No Jobs Available at the moment
          </p>
        )}
        {job.length > 0 && 
        job.map((job, i) => <JobsCard
         key={i}
         item={job}
         handleClick={() => handleNavigate(job)}
         />
         )
        }
      </div>
    </div>
  )
}

export default DisplayAllJobs