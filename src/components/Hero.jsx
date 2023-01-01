import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { useStateContext } from "../context";

const Hero = () => {
  const { connect, address } = useStateContext();
  const navigate = useNavigate()

  return (
    <div className="flex mt-[70px] flex-col items-center justify-center">
      <span className="lg:text-7xl md:text-5xl text-4xl mt-7 font-ClashDisplay-Bold font-bold text-center">
        {" "}
        <span className="text-green-500">CareerUp</span>- List and Find <br />{" "}
        your dream job here
      </span>
      <span className="text-gray-300 mt-7 text-sm font-ClashDisplay-Light md:text-lg text-center md:w-[40%] font-normal">
        Through its user-friendly interface, CareerUp will provide access to
        jobs in your local area, as well as jobs across the globe!
      </span>
      <div className="flex mt-2 items-center space-x-4">
        <Link to="/createaccount">
          <button className="border-2 justify-start border-green-500 px-8 py-4 text-lg md:text-3xl text-wrap min-w-[100px] min-h-[200px] md:min-w-[300px] md:min-h-[200px] font-bold rounded-lg">
            I'm an
            <br /> Employer
          </button>
        </Link>
        <Link to="/ApplicantForm">
          <button className="border-2 border-green-500 px-8 py-4 text-lg md:text-3xl font-bold min-w-[100px] min-h-[200px] md:min-w-[300px] md:min-h-[200px] rounded-lg">
            I'm <br /> Looking <br /> for a job
          </button>
        </Link>
      </div>
      <div className="my-6">
        <CustomButton
          btnType="button"
          title={address ? "Post a job" : "Connect"}
          style={
            address ? "bg-green-500 rounded-lg" : "bg-[#8c6dfd] rounded-lg"
          }
          handleClick={() => {
            if (address) navigate("list");
            else connect();
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
