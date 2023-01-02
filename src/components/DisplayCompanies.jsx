import React from "react";
import { useNavigate } from "react-router-dom";
import CompanyDetails from "./CompanyDetails";
import Loader from "./Loader";

const DisplayCompanies = ({isLoading, company, title}) => {
  const navigate = useNavigate();

  const handleNavigate = (employer) => {
    navigate(`/company/${employer.name}`, { state: employer });
  };
  return (
    <div className=" mx-9 w-full mt-9">
      <h1 className="font-ClashDisplay-Regular text-green-600 text-lg font-bold text-left">
        {title} ({company.length})
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center">
        {isLoading && <Loader />}
        {isLoading && company.length === 0 && (
          <p className="text-lg font-bold text-center font-ClashDisplay-Regular">
            No companies Available at the moment
          </p>
        )}
        {company.length > 0 &&
          company.map((employer, i) => (
            <CompanyDetails
              key={i}
              item={employer}
              handleClick={() => handleNavigate(employer)}
            />
          ))}
      </div>
    </div>
  );
};

export default DisplayCompanies;
