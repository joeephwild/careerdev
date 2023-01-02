import React, { useContext, createContext, useEffect } from "react";
import { getHuddleClient } from "@huddle01/huddle01-client";

import { useHuddleStore } from "@huddle01/huddle01-client/store";
import {
  useAccount,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
  useMetamask,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";
import {
  contractAbi,
  contractAddress,
  converTime,
  convertToDate,
  convertToTime,
} from "../constant";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const huddleClient = getHuddleClient(
    "e5f348aa5626aaa775a09e9515f224933d25b7c40792bbf886a5e74c83827720"
  );
  const peersKeys = useHuddleStore((state) => Object.keys(state.peers));
  const lobbyPeers = useHuddleStore((state) => state.lobbyPeers);
  const roomState = useHuddleStore((state) => state.roomState);
  const recordingState = useHuddleStore((state) => state.recordingState);
  const recordings = useHuddleStore((state) => state.recordings);

  const handleJoin = async () => {
    try {
      await huddleClient.join("dev", {
        address: "0x15900c698ee356E6976e5645394F027F0704c8Eb",
        wallet: "",
        ens: "axit.eth",
      });

      console.log("joined");
    } catch (error) {
      console.log({ error });
    }
  };

  const { contract } = useContract(contractAddress);
  const connect = useMetamask();
  // const { data, isLoading } = useContractRead(contract, "getAllAccount")
  const address = useAddress();

  const getJobs = async () => {
    const Jobs = await contract.call("getAllJob");
    const parsedJobs = Jobs.map((job, i) => ({
      companyName: job.CompanyName,
      image: job.companyImage,
      category: job.Category,
      salary: job.salary.toString(),
      time: convertToDate(job.timeStamp.toString()),
      applicant: job.noAppllicant.toString(),
      owner: job.owner,
      desc: job.description,
      skill: job.skills,
      location: job.location,
      jobType: job.jobType,
      pid: i,
    }));
    return parsedJobs;
  };

  const getAccount = async () => {
    const account = await contract.call("getAllAccount");
    const parsedAccount = account.map((user, i) => ({
      name: user.name,
      owner: user.ownerUser,
      skills: user.skills,
      experience: user.experience.toString(),
      salary: user.salaryExpectation.toString(),
      desc: user.description,
      image: user.profileImage,
      link: user.githubLink,
    }));
    return parsedAccount;
  };

  const getEmployer = async () => {
    const account = await contract.call("getAllEmployers")
    const parsedEmployer = account.map((user, i) => ({
      image: user.companyImage,
      name: user.CompanyName,
      category: user.Category,
      address: user. owner,
      desc: user.description,
      location: user.location,
    }));
    return parsedEmployer;
  };

  const getUserDetails = async () => {
    const singleAccount = await getAccount();
    const filteredUser = singleAccount.filter(
      (account) => account.owner === address
    );
    return filteredUser;
  };

  const getApplicant = async () => {
    const applicant = await contract.call("getAllApplicant");
    const parsedApplicant = applicant.map((user, i) => ({
      name: user.name,
      address: user.candidateAddress,
      cover: user.coverLetter,
      experience: user.resume,
      salary: user.portfolioLink,
    }));
    console.log(parsedApplicant);
    return parsedApplicant;
  };

  return (
    <StateContext.Provider
      value={{
        getJobs,
        contract,
        address,
        getAccount,
        getApplicant,
        getUserDetails,
        connect,
        handleJoin,
        huddleClient,
        peersKeys,
        lobbyPeers,
        roomState,
        recordingState,
        recordings,
        getEmployer
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
