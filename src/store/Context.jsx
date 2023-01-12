import { createContext, useState, useEffect } from "react";

export const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  // const url = "https://restcountries.com/v2/all";
  const url = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  const [activeRegion, setActiveRegion] = useState("Filter by Region");
  const [region, setRegion] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState([]);
  const [name, setName] = useState("");
  const [dataIndex, setDataIndex] = useState(0);

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  // switch data between being filtered, searched or unfiltered
  const countriesData = [countries, search, filtered];

  // all countries data on first load
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch(console.error);
  }, []);

  // return match based on country name
  useEffect(() => {
    setSearch(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(name.toLowerCase())
      )
    );
  }, [name]);

  // handles search functionality
  const handleCountrySearch = (e) => {
    setName(e.target.value);
    setActiveRegion("Filter by Region");
    setDataIndex(1);
  };

  // filters match based on the region
  useEffect(() => {
    setFiltered(
      countries.filter((country) =>
        country.region.toLowerCase().includes(region.toLowerCase())
      )
    );
  }, [region]);

  // handles the region filter functionality
  const handleRegionFilter = (e) => {
    if (e.target.innerText === "Remove Filter") {
      setActiveRegion("Filter by Regions");
      setDataIndex(0);
    } else {
      setRegion(e.target.innerText);
      setActiveRegion(e.target.innerText);
      setDataIndex(2);
    }
  };

  return (
    <CountriesContext.Provider
      value={{
        regions,
        name,
        activeRegion,
        handleRegionFilter,
        handleCountrySearch,
        countriesData,
        dataIndex,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
