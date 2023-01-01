import React, { useEffect, useState } from "react";
import { Loader, Profile } from "../components";
import { useStateContext } from "../context";

const ProfileDisplay = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [account, setAccount] = useState([]);
  //console.log(account)
  const { contract, address, getUserDetails } = useStateContext();

  const getUser = async () => {
    setIsLoading(true);
    const data = await getUserDetails();
    setAccount(data)
    setIsLoading(false);
  };

  useEffect(() => {
    if(contract) getUser()
  }, [contract, address])
  return (
    <div>
      {isLoading && <Loader />}
      {account.map((user, i) => (
          <Profile
          key={i}
          isLoading={isLoading}
          detail={user}
           />
        ))}
    </div>
  );
};

export default ProfileDisplay;
