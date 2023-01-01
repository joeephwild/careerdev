import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Profile = ({ detail, isLoading }) => {
  console.log(detail);
  return (
    <div className="flex flex-col mt-[10%] items-start lg:items-center justify-start lg:justify-start space-y">
      <div className="lg:flex  flex-col items-start">
        <img
          src={detail.image}
          alt="profile"
          className="h-36 w-36 rounded-full"
        />
        <div className="flex-col items-start ">
          <span className="text-lg font-bold font-ClashDisplay-Bold">
            {detail.name}
          </span>
          <div className="flex items-center space-x-16">
            <div className="flex items-center space-x-2">
              <CgProfile size={28} />
              <span className="font-ClashDisplay-Regular text-sm">
                {detail.skills}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Link t={detail.link}>
                <AiOutlineGithub size={28} />
              </Link>
            </div>
          </div>
          <button className="text-sm font-bold font-ClashDisplay-Bold">
            {detail.owner}
          </button>
        </div>
        <span className='text-sm font-bold'>{detail.desc}</span>
      </div>
    </div>
  );
};

export default Profile;
