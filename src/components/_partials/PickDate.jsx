/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useApp } from '../../contexts/AppContext';

const PickDate = () => {
  const today = new Date();
  const started = new Date(2019, 11, 31); // when covid-19 started
  const { date, setDate } = useApp();
  const handleClick = date => {
    return date <= today && date >= started ? setDate(date) : today;
  };
  return (
    <div className="flex relative w-3/5">
      <DatePicker
        id="date"
        selected={date}
        onChange={handleClick}
        maxDate={today}
        minDate={started}
        className="truncate text-xs md:text-sm px-3 py-2 outline-none bg-white font-medium border-l-2 border-gray-400 w-full"
      />
      <label htmlFor="date">
        <i className="far fa-calendar right-1 md:right-2 absolute py-1.5 md:py-2.5 text-gray-500" />
      </label>
    </div>
  );
};

export default PickDate;
