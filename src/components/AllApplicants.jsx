import { useContract, useContractWrite } from "@thirdweb-dev/react";
import React from "react";
import CustomButton from "./CustomButton";

const AllApplicants = ({ state }) => {
    const { contract } = useContract("0xAa3C537CDeeFc8Ea9e86b7C5dAecF11fa4cDA01E");
    const { mutateAsync: setJobToClosed, isLoading } = useContractWrite(contract, "setJobToClosed")
  
    const call = async () => {
      try {
        const data = await setJobToClosed([ state.pid ]);
        console.info("contract call successs", data);
      } catch (err) {
        console.error("contract call failure", err);
      }
    }
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="flex flex-col  min-h-full mt-9 min-w-full px-4 py-2 items-start">
      <img
        src={state.image}
        alt="logo"
        className="h-16 w-16 object-contain rounded-full"
      />
      <span>{state.companyName}</span>
      <span>{truncate(state.desc, 220)}</span>
      <div>
        <CustomButton
        title='Close Job'
        style="bg-red-800 w-full mt-6"
        handleClick={call}
         />
      </div>
    </div>
  );
};

export default AllApplicants;
