import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const AppContext = createContext();
export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const { API_URL } = process.env;
  const [date, setDate] = useState(new Date());
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [timeline, setTimeline] = useState([]);
  const [countryVaccinatedData, setCountryVaccinatedData] = useState(
    null,
  );
  const [countriesData, setCountriesData] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [continents, setContinents] = useState([]);

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  const onChangeCountry = ({ target: { value } }) => {
    const results = countriesData.filter(
      nation => nation.country === value,
    );
    setCurrentCountry(results[0]);
  };

  const getCountryVaccinateData = async () => {
    const ENDPOINT = `vaccine/coverage/countries/${currentCountry.country}?lastdays=all&fullData=true`;

    const response = await axios.get(API_URL + ENDPOINT);
    if (response) {
      const { data } = response;
      if (data) {
        const { timeline } = data;
        setTimeline(timeline);
        const filteredData = timeline.filter(
          line => line.date === `${month}/${day}/${year % 100}`,
        );
        setCountryVaccinatedData(
          filteredData[0] || timeline[timeline.length - 1],
        );
      }
    }
  };

  const getCountriesData = async () => {
    const COUNTRIES_ENDPOINT = 'countries';
    setLoadingCountries(true);
    const response = await axios.get(API_URL + COUNTRIES_ENDPOINT);
    setLoadingCountries(false);

    if (response) {
      const { data } = response;
      if (data) {
        setCountriesData(data);
        setCurrentCountry(data[0]);
      }
    }
  };

  const getContinentsData = async () => {
    const ENDPOINT = 'continents';
    const response = await axios.get(API_URL + ENDPOINT);

    if (response) {
      const { data } = response;
      if (data) {
        setContinents(data);
      }
    }
  };

  useEffect(() => {
    if (date) {
      const filteredData = timeline.filter(
        line => line.date === `${month}/${day}/${year % 100}`,
      );
      setCountryVaccinatedData(
        filteredData[0] || timeline[timeline.length - 1],
      );
    }
  }, [date]);

  return (
    <AppContext.Provider
      value={{
        continents,
        loadingCountries,
        countriesData,
        currentCountry,
        countryVaccinatedData,
        date,
        timeline,
        setDate,
        setCurrentCountry,
        getCountriesData,
        getCountryVaccinateData,
        onChangeCountry,
        getContinentsData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

AppProvider.defaultProps = {
  children: <div />,
};

export default AppProvider;
