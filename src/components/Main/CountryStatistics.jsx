import React, { useEffect } from 'react';
import { useApp } from '../../contexts/AppContext';

const CountryStatistics = () => {
  const {
    loadingCountries,
    currentCountry,
    countriesData,
    countryVaccinatedData,
    getCountryVaccinateData,
    getCountriesData,
  } = useApp();
  useEffect(() => {
    if (!countriesData.length) {
      getCountriesData();
    }
  }, []);

  useEffect(() => {
    if (currentCountry) {
      getCountryVaccinateData();
    }
  }, [currentCountry]);

  const {
    testsPerOneMillion,
    tests,
    cases,
    todayCases,
    critical,
    active,
    todayRecovered,
    recovered,
    todayDeaths,
    deaths,
  } = currentCountry || {};
  const { daily, total } = countryVaccinatedData || {};

  if (loadingCountries) {
    return (
      <div className="h-32 rounded-2xl bg-[#f1e3e3ef] animate-pulse  w-3/4 md:w-4/5 rounded-b mx-auto" />
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:flex lg:justify-between w-3/4 md:w-4/5 mx-auto p-2 md:p-4 rounded-b shadow-lg">
      <div className="flex flex-col items-center space-y-3">
        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#2FC8B8]">
          {testsPerOneMillion}
        </p>
        <p className="text-xs font-medium">Tests</p>
        <p className="text-opacity-70 text-gray-600 font-medium">
          {tests}
        </p>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#2FC8B8]">
          {todayCases}
        </p>
        <p className="text-xs font-medium">Positive cases</p>
        <p className="text-opacity-70 text-gray-600 font-medium">
          {cases}
        </p>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#2FC8B8]">
          {critical}
        </p>
        <p className="text-xs font-medium">Hospitalized</p>
        <p className="text-opacity-70 text-gray-600 font-medium">
          {active}
        </p>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#2FC8B8]">
          {todayRecovered}
        </p>
        <p className="text-xs font-medium">Recovered</p>
        <p className="text-opacity-70 text-gray-600 font-medium">
          {recovered}
        </p>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#2FC8B8]">
          {todayDeaths}
        </p>
        <p className="text-xs font-medium">Deaths</p>
        <p className="text-opacity-70 text-gray-600 font-medium">
          {deaths}
        </p>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#2FC8B8]">
          {daily}
        </p>
        <p className="text-xs font-medium">Vaccinated</p>
        <p className="text-opacity-70 text-gray-600 font-medium">
          {total}
        </p>
      </div>
    </div>
  );
};

export default CountryStatistics;
