import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const { contract } = useContract('0x6b1E5780dADcdfAB8E956DF12CAEb8C96D51afAf');
  const address =  useAddress()
  const { mutateAsync: createAnAccount } = useContractWrite(contract, 'createAnAccount');
  const {mutateAsync: createEmployerAccount } = useContractWrite(contract, 'createEmployerAccount');
  const {mutateAsync: listAJob } = useContractWrite(contract, 'listAJob');

  const publishAccount = async(form) => {
    try {
      const data =await  createAnAccount(
        [
          form.name,
          address,
          form.skills,
          form.experience,
          form.salaryExpectation,
          form.description,
          form.profileImage,
          form.githubLink
        ]
      )
      console.log("contract call success", data)
    } catch (error) {
      console.log("contract call failure", error)
    }
  }

  const publishEmployerAccount = async(form) => {
    try {
      const data =await  createEmployerAccount(
        [
          form.companyName,
          form.category,
          address,
          form.description,
          form.location
        ]
      )
      console.log("contract call success", data)
    } catch (error) {
      console.log("contract call failure", error)
    }
  }

  const publishAJob = async(form) => {
    try {
      const data =await  listAJob(
        [
          pid,
          form.companyName,
          form.companyImage,
          form.category,
          form.salary,
          form.description,
          form.skills,
          form.location,
          form.jobType
        ],
       {value: ethers.utils.formatEther("0.05", 18)}
      )
      console.log("contract call success", data)
    } catch (error) {
      console.log("contract call failure", error)
    }
  }
  return (
    <StateContext.Provider
      value={{ 
        createAnAccount: publishAccount,
        address,
        createEmployerAccount: publishEmployerAccount,
        listAJob: publishAJob
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);