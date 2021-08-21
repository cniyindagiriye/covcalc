import React from 'react';
import CountrySelector from '../_partials/CountrySelector';
import PickDate from '../_partials/PickDate';
import TopNavbar from '../_partials/TopNavbar';

const Header = () => (
  <div className="flex flex-col items-center w-full bg-[#2FC8B8] pt-2 md:pt-3 xl:pt-4 px-4 md:px-12 xl:px-24">
    <TopNavbar />
    <div className="flex flex-col items-center space-y-3 my-12">
      <h1 className="uppercase text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-white">
        Updates
      </h1>
      <p className="tracking-tight text-white font-light">
        Search a country
      </p>
      <form className="flex items-stretch w-full">
        <CountrySelector />
        <PickDate />
        <button
          type="submit"
          className="uppercase font-bold px-4 rounded-r bg-[#1E776E] border border-white text-white"
        >
          submit
        </button>
      </form>
    </div>

    <div className="space-y-2 mt-2 md:mt-4 flex flex-col items-center bg-[#1E776E] w-3/4 md:w-4/5 rounded-t shadow px-2 md:px-4 py-8 md:py-12">
      <p className="text-xl md:text-4xl font-light text-[#2FC8B8]">
        2, 000, 111
      </p>
      <p className="font-bold text-white">Cumulatively</p>
    </div>
  </div>
);

export default Header;
