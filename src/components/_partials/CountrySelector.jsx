import React from 'react';

const CountrySelector = () => {
  return (
    <select className="w-2/5 truncate px-3 text-xs md:text-sm font-medium py-2 outline-none bg-white rounded-l">
      <option value="NL">🇳🇱&emsp;Netherlands</option>
      <option value="DE">🇩🇪&emsp;Germany</option>
      <option value="FR">🇫🇷&emsp;France</option>
      <option value="ES">🇪🇸&emsp;Spain</option>
    </select>
  );
};

export default CountrySelector;
