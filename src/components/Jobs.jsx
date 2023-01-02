import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton, DisplayAllJobs } from "../components";
import { useStateContext } from "../context";

const Jobs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([6]);
  const { address, contract, getJobs } = useStateContext();
  const navigate = useNavigate

  const fetchJobs = async () => {
    setIsLoading(true);
    const data = await getJobs();
    setJobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchJobs();
  }, [address, contract]);

  return (
    <div>
        <span className='text-2xl font-ClashDisplay-Bold text-cente flex justify-center items-centerr font-bold'>ALL JOBS</span>
      <DisplayAllJobs isLoading={isLoading} job={jobs} />
      <Link to='/jobs'>
      <CustomButton
      title='see more'
      style='bg-green-600 px-4 py-2 my-6 flex mx-auto rounded-lg '
       />
       </Link>
    </div>
  );
};

export default Jobs;
