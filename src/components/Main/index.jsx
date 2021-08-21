import React from 'react';
import Continents from '../Continents';
import CountryStatistics from './CountryStatistics';
import profile from '../../assets/profile.png';

const MainContainer = () => {
  return (
    <div className="flex flex-col space-y-12 md:space-y-16">
      <div className="px-4 md:px-12 xl:px-24">
        <CountryStatistics />
      </div>

      <Continents />

      <div className="flex items-center w-full bg-[#EEF6F6]">
        <img
          className="block w-1/2 h-32 md:h-[32rem] object-cover"
          src={profile}
          alt="profile"
        />
        <div className="flex flex-col items-center w-1/2">
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-medium md:text-xl lg:text-2xl">
              Celestin Niyindagiriye
            </h1>
            <p className="mt-2 mb-1">Software engineer</p>
            <p className="text-xs text-gray-600 text-opacity-95">
              22<sup>nd</sup> August 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
