import React, { useContext, createContext } from "react";

import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";
import { contractAbi, contractAddress } from "../constant";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const { contract } = useContract(
    "0xAeBb6e1a7B484f219A1A98d21cA63C0dfCc24b12"
  );
  const { mutateAsync: createEmployerAccount } = useContractWrite(
    contract,
    "createEmployerAccount"
  );
  const address = useAddress();
  const call = async(form) => {
    try {
      const data = await createEmployerAccount([
        form.companyImage,
        form.CompanyName,
        form.description,
        form.location,
      ]);
      console.log(data);
      alert("done");
    } catch (error) {
      alert("failed");
    }
  };

  return (
    <StateContext.Provider
      value={{
        createEmployerAccount: call,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
