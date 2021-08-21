import React, { useState, useEffect } from 'react';
import { useApp } from '../../contexts/AppContext';
import Continent from './Continent';
import leftArrow from '../../assets/ic-arrows-left.svg';

const Continents = () => {
  const { continents, getContinentsData } = useApp();
  const [viewed, setViewed] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);

  const handlePrevious = () => {
    if (start > 0) {
      setStart(start => start - 1);
      setEnd(end => end - 1);
    }
  };

  const handleNext = () => {
    if (end < continents.length) {
      setEnd(end => end + 1);
      setStart(start => start + 1);
    }
  };

  useEffect(() => {
    if (!continents.length) {
      getContinentsData();
    }
  }, []);
  useEffect(() => {
    if (continents.length) {
      setViewed(continents.slice(start, end));
    }
  }, [continents, start, end]);
  return (
    <div className="flex flex-col items-center space-y-5 md:space-y-10 w-full">
      <h1 className="uppercase text-xl md:text-2xl xl:text-3xl font-medium">
        Per continents
      </h1>
      <div className="relative space-y-6 md:space-y-0 md:space-x-16 flex flex-wrap md:flex-nowrap items-stretch justify-between overflow-x-hidden w-full">
        {viewed.map(element => (
          <Continent key={element.continent} data={element} />
        ))}

        <button
          disabled={end >= continents.length}
          type="button"
          className="hidden disabled:bg-opacity-10 md:block bg-[#1E776E] rounded-full p-3  left-4  md:left-8 absolute top-1/2 w-12 h-12"
          onClick={handleNext}
        >
          <img
            className="w-full object-cover"
            src={leftArrow}
            alt="leftArrow"
          />
        </button>

        <button
          disabled={start <= 0}
          type="button"
          className="hidden md:block disabled:bg-opacity-10 bg-[#1E776E] rounded-full p-3  right-4  md:right-8 absolute top-1/2 w-12 h-12"
          onClick={handlePrevious}
        >
          <img
            className="w-full object-cover rotate-180"
            src={leftArrow}
            alt="rightArrow"
          />
        </button>
      </div>
    </div>
  );
};

export default Continents;
