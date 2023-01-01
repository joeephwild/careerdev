import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import logo from "../assets/logo-white.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../context";

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  const { connect, address } = useStateContext();
  const navigate = useNavigate();

  const navlinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "companies",
      link: "/",
    },
    {
      name: "Jobs",
      link: "/jobs",
    },
    {
      name: "Interviews",
      link: "/",
    },
    {
      name: "faq",
      link: "/",
    },

    {
      name: "Post a JOB",
      link: "/list",
    },
    {
      name: "Profilr",
      link: "/profile",
    },
  ];
  return (
    <nav className="w-full fixed z-[8888] h-16 top-0 bg-black flex  items-center justify-between px-6">
      <div className="flex space-x-4 items-center">
        <img src={logo} alt="logo" className="h-24 w-24 object-contain" />
        <ul className="lg:flex hidden cursor-pointer list-none items-center space-x-8 font-normal">
          <Link to="/">Home</Link>
          <li>Companies</li>
          <Link to="/jobs">Jobs</Link>
          <li>Interviews</li>
          <li>faq</li>
          <Link to="/list">Post a JOB</Link>
          <Link to="/profile">Profile</Link>
        </ul>
      </div>

      <div className="lg:flex hidden items-center space-x-3">
        <div className="text-sm mb-2 font-ClashDisplay-Regular">
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
        <Link to='/meet'>
        <CustomButton
          title="start a meeting"
          style="bg-green-500 text-sm rounded-lg"
        />
        </Link>
      </div>
      <AiOutlineMenu
        className="lg:hidden block"
        onClick={() => setToggleDrawer((prev) => !prev)}
        size={27}
      />
      <div
        className={`absolute top-[80%] left-0 right-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${
          !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
        } transition-all duration-700`}
      >
        <div className="flex flex-col justify-center items-center">
          <ul className="mb-4 flex cursor-pointer flex-col justify-center w-screen">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${
                  isActive === link.name && "bg-[#3a3a43]"
                }`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <p
                  className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                    isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"
                  }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex space-x-3 mx-4">
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
            <CustomButton
              title="start a meeting"
              style="bg-green-500 text-sm rounded-lg"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
