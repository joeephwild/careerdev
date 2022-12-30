import React, { useContext, createContext } from "react";

import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";
import { contractAbi, contractAddress } from "../constant";

const StateContext = createContext();

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, contractAbi, signer);

export const StateProvider = ({ children }) => {
  const { contract } = useContract("0xeC23733e5a26a9d80EA3E1254072C1E46b3Ce326")
  const { mutateAsync: createEmployerAccount} = useContractWrite(contract, "createEmployerAccount")
  const address = useAddress()
const call = async(
  _companyImage, _CompanyName, _Category, _owner, _description, _location
) => {
  try {
    const data = await createEmployerAccount([
      _companyImage, _CompanyName, _Category, address, _description, _location
    ])
    console.log(data)
    alert("done")
  } catch (error) {
    alert("failed")
  }
 
}

  return (
    <StateContext.Provider
      value={{
        createEmployerAccount: call
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
