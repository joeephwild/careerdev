import React from "react";
import { useLocation } from "react-router-dom";
import ApplicationCard from "../components/ApplicationCard";

const JobsDetails = () => {
  const { state } = useLocation();
  return (
    <div className=" mt-[10%] mx-4 my-4 md:mt-[2%]">
      <div className="grid md:grid-cols-6 grid-cols-1 justify-center items-center mx-auto  gap-3">
        <div className="col-span-4">
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
              <span>Location</span>
              <span className="font-ClashDisplay-Light font-noraml mt-6">
                {state.location}
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span>Job Type</span>
              <span className="font-ClashDisplay-Light font-noraml mt-6">
                {state.location}
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span>Salary</span>
              <span className="font-ClashDisplay-Light font-noraml mt-6">
                {state.salary}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span>Industry</span>
            <span className="font-ClashDisplay-Light font-noraml mt-6">
              {state.category}
            </span>
          </div>

          <div className="flex flex-col items-start">
            <span className="font-bold font-ClashDisplay-Bold text-gray-400">
              Description
            </span>
            <span className="font-ClashDisplay-Light text-xs font-noraml mt-6">
              {state.desc}
            </span>
          </div>
        </div>
        {!state.owner && (
          <div className="col-span-2 mt-9">
            <ApplicationCard
             index={state.pid} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsDetails;
