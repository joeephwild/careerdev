import React, { useEffect, useState } from 'react'
import { DisplayCompanies } from '../components';
import { useStateContext } from '../context';

const DisplayEmployers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [Companies, setCompanies] = useState([]);
    const { address, contract,  getEmployer } = useStateContext();

    const fetchEmployer = async() => {
        setIsLoading(true);
        const data = await getEmployer();
        setCompanies(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if(contract) fetchEmployer();
      }, [address, contract]);
    
  return (
    <DisplayCompanies
    title='All Companies'
    isLoading={isLoading}
    company={Companies}
    />
  )
}

export default DisplayEmployers