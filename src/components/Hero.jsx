import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex mt-[70px] flex-col items-center justify-center">
      <span className="lg:text-7xl md:text-5xl text-4xl mt-7 font-ClashDisplay-Bold font-bold text-center">
        {" "}
        <span className="text-green-500">CareerUp</span>- List and Find <br />{" "}
        your dream job here
      </span>
      <span className="text-gray-300 mt-7 text-lg text-center w-[40%] font-normal">
        Through its user-friendly interface, CareerUp will provide access to
        jobs in your local area, as well as jobs across the globe!
      </span>
      <div className="flex mt-2 items-center space-x-4">
        <Link to='/createaccount'>
          <button className="border-2 justify-start border-green-500 px-8 py-4 text-3xl text-wrap min-w-[300px] min-h-[200px] font-bold rounded-lg">
            I'm an
            <br /> Employer
          </button>
        </Link>
        <Link to='/ApplicantForm'>
        <button className="border-2 border-green-500 px-8 py-4 text-3xl font-bold min-w-[300px] min-h-[200px] rounded-lg">
          I'm <br /> Looking <br /> for a job
        </button>
        </Link>
      </div>
      <div>
        <ConnectWallet className="mt-6 text-sm" accentColor="green" />
      </div>
    </div>
  );
};

export default Hero;
