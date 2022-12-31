import React, { useContext, createContext } from "react";

import { useAddress, useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";
import { contractAbi, contractAddress, converTime, convertToDate, convertToTime } from "../constant";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const { contract } = useContract(
    contractAddress
  );
  const address = useAddress();

  const  getJobs = async() => {
    const Jobs =  await contract.call( "getAllJob")
    const parsedJobs = Jobs.map((job, i) => ({
      companyName: job.CompanyName,
      image: job.companyImage,
      category: job.Category,
      salary: (job.salary.toString()),
      time: (convertToDate(job.timeStamp.toString())),
      applicant: (job.noAppllicant.toString()),
      owner: job.owner,
      desc: job.description,
      skill: job.skills,
      location: job.location,
      jobType: job.jobType,
      pid: i
    }))
    return parsedJobs;
    
  }
  
  const  getAccount = async() => {
    const account =  await contract.call( "getAllAccount")
    const parsedAccount = account.map((user, i) => ({
       name: user.name,
       address: user.ownerUser,
       skills: user.skills,
       experience: user.experience,
       salary: user.salaryExpectation,
       desc: user.description,
       image: user.profileImage,
       link: user.githubLink
    }))
    console.log(parsedAccount)
    return parsedAccount;
  }
 

  return (
    <StateContext.Provider
      value={{
        getJobs,
        contract,
        address
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
