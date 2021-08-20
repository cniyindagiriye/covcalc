import React from 'react';
import Logo from './icons/Logo';

const TopNavbar = () => (
  <nav className="flex items-center justify-between w-full">
    <Logo />
    <a href="#contact" className="capitalize">
      Contact
    </a>
  </nav>
);

export default TopNavbar;
