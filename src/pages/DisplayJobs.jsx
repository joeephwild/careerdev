import React, { useState, useEffect} from 'react'
import { DisplayAllJobs } from '../components';
import { useStateContext } from '../context';

const DisplayJobs = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [jobs, setJobs] = useState([]);
    const { address, contract,  getJobs } = useStateContext();

    const fetchJobs = async() => {
        setIsLoading(true);
        const data = await getJobs();
        setJobs(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if(contract) fetchJobs();
      }, [address, contract]);
    
  return (
    <DisplayAllJobs
    title="All Jobs"
    isLoading={isLoading}
    job={jobs}
     />
  )
}

export default DisplayJobs