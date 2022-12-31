import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import React from "react";
import CustomButton from "./CustomButton";
import logo from '../assets/logo-white.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full fixed z-[8888] top-0 bg-transparent flex items-center justify-between px-6">
      <div className="flex space-x-4 items-center">
        <img src={logo} alt='logo' className='h-24 w-24 object-contain' />
        <ul className="md:flex hidden list-none items-center space-x-8 font-normal">
          <li>Companies</li>
          <Link to='/jobs'>Jobs</Link>
          <li>Interviews</li>
          <li>faq</li>
          <li></li>
        </ul>
      </div>

      <div className="lg:flex hidden items-center space-x-3">
        <div className="text-sm mb-2 font-ClashDisplay-Regular">
          <ConnectWallet  accentColor="green" />
        </div>
        <CustomButton
          title="start a meeting"
          style="bg-green-500 text-white px-9 py-3 text-lg rounded-lg text-center"
        />
      </div>
    </nav>
  );
};

export default Navbar;
