import React from 'react';

const TopNavbar = () => (
  <nav className="flex items-center justify-between w-full">
    <h1 className="uppercase font-semibold text-xl md:4xl tracking-widest cursor-pointer text-white">
      Covicalc
    </h1>
    <a
      href="#contact"
      className="capitalize bg-[#1E776E] py-3 px-8 text-white font-medium rounded"
    >
      Contact
    </a>
  </nav>
);

export default TopNavbar;
