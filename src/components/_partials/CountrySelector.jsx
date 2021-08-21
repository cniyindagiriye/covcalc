/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useApp } from '../../contexts/AppContext';

const CountrySelector = () => {
  const { currentCountry, countriesData, onChangeCountry } = useApp();
  const { countryInfo } = currentCountry || {};
  const { flag } = countryInfo || {};
  return (
    <div className="relative w-2/5 ">
      <select
        id="country"
        className="truncate pl-8  pr-3 text-xs md:text-sm font-medium py-2 outline-none bg-white rounded-l w-full h-full"
        onChange={onChangeCountry}
      >
        {countriesData.map(nation => (
          <option key={nation.country} value={nation.country}>
            {nation.country}
          </option>
        ))}
      </select>
      <label
        className="w-5 h-5 left-3 top-1.5 absolute"
        htmlFor="country"
      >
        <img
          className="w-full object-cover h-full"
          src={flag}
          alt=""
        />
      </label>
    </div>
  );
};

export default CountrySelector;
