import React from 'react';
import Continent from './Continent';

const Continents = () => {
  return (
    <div className="flex flex-col items-center space-y-5 md:space-y-10 w-full">
      <h1 className="uppercase text-xl md:text-2xl xl:text-3xl font-medium">
        Per continents
      </h1>
      <Continent />
    </div>
  );
};

export default Continents;
