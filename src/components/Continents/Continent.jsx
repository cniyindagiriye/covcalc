import React from 'react';
import PropTypes from 'prop-types';

const Continent = ({ data }) => {
  const { continent, todayCases, cases, deaths, recovered } = data;
  return (
    <div className="flex items-stretch shadow-lg w-[500px]">
      <div className="p-8 flex flex-col justify-between items-center rounded-l-lg">
        <h2 className="uppercase font-bold md:text-base">
          {continent}
        </h2>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-xl md:text-2xl font-light text-[#2FC8B8]">
            {todayCases}
          </p>
          <p className="font-medium text-xs">New cases</p>
        </div>
        <p className="text-gray-600 text-opacity-70">
          All cases: {cases}
        </p>
      </div>
      <div className="space-y-3 flex flex-col items-center bg-[#2FC8B8] rounded-r-lg">
        <div className="px-6 py-4 flex flex-col items-center space-y-1 w-full">
          <p className="text-lg md:text-xl font-medium">789</p>
          <p className="font-medium text-xs">New deaths</p>
          <p className="font-light text-white">
            Total deaths: {deaths}
          </p>
        </div>

        <div className="px-6 py-4 flex flex-col items-center space-y-1 w-full border-t border-b border-gray-400">
          <p className="text-lg md:text-xl font-medium">789</p>
          <p className="font-medium text-xs">Newly recovered</p>
          <p className="font-light text-white">
            Total recovered: {recovered}
          </p>
        </div>

        <div className="px-6 py-4 flex flex-col items-center space-y-1 w-full">
          <p className="text-lg md:text-xl font-medium">789</p>
          <p className="font-medium text-xs">New Vaccinated</p>
          <p className="font-light text-white">
            Total Vaccinated: 4, 254
          </p>
        </div>
      </div>
    </div>
  );
};

Continent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Continent;
