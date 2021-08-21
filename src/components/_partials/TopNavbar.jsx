import React from 'react';
import logo from '../../assets/C O V I C A L C.svg';

const TopNavbar = () => (
  <nav className="flex items-center justify-between w-full">
    <img
      src={logo}
      alt="COVICALC"
      className="w-24 object-cover cursor-pointer"
    />
    <a
      href="#contact"
      className="capitalize bg-[#1E776E] py-3 px-8 text-white font-medium rounded"
    >
      Contact
    </a>
  </nav>
);

export default TopNavbar;
