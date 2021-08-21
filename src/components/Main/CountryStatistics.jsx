import React from 'react';

const CountryStatistics = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:flex lg:justify-between w-3/4 md:w-4/5 mx-auto p-2 md:p-4 rounded-b shadow-lg">
      <div className="flex flex-col items-center space-y-3">
        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#2FC8B8]">
          1, 1270
        </p>
        <p className="text-xs font-medium">Tests</p>
        <p className="text-opacity-70 text-gray-600 font-medium">
          2, 188 881
        </p>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#2FC8B8]">
          1, 1270
        </p>
        <p className="text-xs font-medium">Positive cases</p>
        <p className="text-opacity-70 text-gray-600 font-medium">
          2, 188 881
        </p>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#2FC8B8]">
          1, 1270
        </p>
        <p className="text-xs font-medium">Hospitalized</p>
        <p className="text-opacity-70 text-gray-600 font-medium">
          2, 188 881
        </p>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#2FC8B8]">
          1, 1270
        </p>
        <p className="text-xs font-medium">Recovered</p>
        <p className="text-opacity-70 text-gray-600 font-medium">
          2, 188 881
        </p>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#2FC8B8]">
          1, 1270
        </p>
        <p className="text-xs font-medium">Deaths</p>
        <p className="text-opacity-70 text-gray-600 font-medium">
          2, 188 881
        </p>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#2FC8B8]">
          1, 1270
        </p>
        <p className="text-xs font-medium">Vaccinated</p>
        <p className="text-opacity-70 text-gray-600 font-medium">
          2, 188 881
        </p>
      </div>
    </div>
  );
};

export default CountryStatistics;
