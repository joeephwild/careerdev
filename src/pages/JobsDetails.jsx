import { useAddress } from "@thirdweb-dev/react";
import React from "react";
import { useLocation } from "react-router-dom";
import { AllApplicants } from "../components";
import ApplicationCard from "../components/ApplicationCard";

const JobsDetails = () => {
  const { state } = useLocation();
  const address = useAddress();
  return (
    <div className=" mt-[10%] mx-4 my-4 md:mt-[2%]">
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center mx-auto  gap-3">
        <div className="mt-9">
          <div className="flex border-b-2 py-4 border-gray-700 w-full justify-between">
            <div className="flex space-x-2 items-center">
              <img
                src={state.image}
                alt=""
                className="h-16 w-16 rounded-full object-contain"
              />
              <div className="flex flex-col flex-wrap items-start">
                <span>{state.skill}</span>
                <span>{state.companyName}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="bg-green-400/40 text-white px-4 py-2">
                70% match
              </button>
            </div>
          </div>

          <div className="flex py-4 w-full justify-between">
            <div className="flex flex-col items-start">
              <span className="font-bold font-ClashDisplay-Bold">Location</span>
              <span className="font-ClashDisplay-Light font-noraml mt-6">
                {state.location}
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold font-ClashDisplay-Bold">Job Type</span>
              <span className="font-ClashDisplay-Light font-noraml mt-6">
                {state.jobType}
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold font-ClashDisplay-Bold">Salary</span>
              <span className="font-ClashDisplay-Light font-noraml mt-6">
                {state.salary}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold font-ClashDisplay-Bold">Industry</span>
            <span className="font-ClashDisplay-Light font-noraml mt-6">
              {state.category}
            </span>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold font-ClashDisplay-Bold">Skills</span>
            <span className="font-ClashDisplay-Light flex space-x-5 font-noraml mt-6">
              {state.skill}
            </span>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold font-ClashDisplay-Bold">
              Description
            </span>
            <span className="font-ClashDisplay-Light text-xs font-noraml mt-6">
              {state.desc}
            </span>
          </div>
        </div>
        {address !== state.owner && (
          <div className=" ">
            <ApplicationCard index={state.pid} />
          </div>
        )}

        {address == state.owner && (
           <AllApplicants state={state} />
        )}
      </div>
    </div>
  );
};

export default JobsDetails;
