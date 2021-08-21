import React from 'react';

const Continent = () => {
  return (
    <div className="flex items-stretch shadow-lg">
      <div className="p-8 flex flex-col justify-between items-center rounded-l-lg">
        <h2 className="uppercase font-bold md:text-base">Africa</h2>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-xl md:text-2xl font-light text-[#2FC8B8]">
            11, 270
          </p>
          <p className="font-medium text-xs">New cases</p>
        </div>
        <p className="text-gray-600 text-opacity-70">
          All cases: 22, 188, 881
        </p>
      </div>
      <div className="space-y-3 flex flex-col items-center bg-[#2FC8B8] rounded-r-lg">
        <div className="px-6 py-4 flex flex-col items-center space-y-1 w-full">
          <p className="text-lg md:text-xl font-medium">789</p>
          <p className="font-medium text-xs">New deaths</p>
          <p className="font-light text-white">
            Total deaths: 4, 254
          </p>
        </div>

        <div className="px-6 py-4 flex flex-col items-center space-y-1 w-full border-t border-b border-gray-400">
          <p className="text-lg md:text-xl font-medium">789</p>
          <p className="font-medium text-xs">Newly recovered</p>
          <p className="font-light text-white">
            Total recovered: 4, 254
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

export default Continent;
