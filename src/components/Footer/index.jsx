import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between bg-[#1E776E] mt-auto">
      <div className="flex flex-col space-y-4 items-center py-4 md:py-12 px-4 md:px-12 xl:px-24">
        <h3 className="uppercase font-bold text-lg md:text-2xl text-white">
          Reach me
        </h3>
        <div className="flex flex-col items-center space-y-3">
          <div className="flex flex-col items-center space-y-1">
            <h4 className="font-medium text-white">Email</h4>
            <p className="text-xs md:text-sm text-opacity-75 text-gray-200">
              cniyindagiriye@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <h4 className="font-medium text-white">Phone</h4>
            <p className="text-xs md:text-sm text-opacity-75 text-gray-200">
              +250 7807 28 136
            </p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <h4 className="font-medium text-white">Profile</h4>
            <p className="text-xs md:text-sm text-opacity-75 text-gray-200">
              <a
                className="hover:text-white"
                href="https://www.linkedin.com/in/celestin-niyindagiriye-1380b1175/"
              >
                linkedin.com/in/celestin-niyindagiriye
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#14524b]  py-2 md:py-3 xl:py-4 px-4 md:px-12 xl:px-24 w-full">
        <p className="text-gray-200 text-opacity-75">
          Developed by{' '}
          <span className="text-white">Celestin Niyindagiriye</span>
        </p>
        <p className="text-gray-200 text-opacity-75">
          Designed by{' '}
          <span className="text-white">Awesomity Lab</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
