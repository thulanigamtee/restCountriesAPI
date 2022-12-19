import { createContext, useState, useEffect } from "react";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  //const url = "https://restcountries.com/v3.1/all";
  const url = "https://restcountries.com/v2/all";
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);
  const [region, setRegion] = useState([]);
  const [activeRegion, setActiveRegion] = useState("Filter by Region");
  const [search, setSearch] = useState([]);
  const [name, setName] = useState("");
  const [index, setIndex] = useState(0);

  const countriesData = [countries, search, filtered];

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    setSearch(
      countries.filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  }, [name]);

  const handleCountrySearch = (e) => {
    setName(e.target.value);
    setActiveRegion("Filter by Region");
    setIndex(1);
  };

  useEffect(() => {
    setFiltered(
      countries.filter((country) =>
        country.region.toLowerCase().includes(region.toLowerCase())
      )
    );
  }, [region]);

  const handleRegionFilter = (e) => {
    setRegion(e.target.innerText);
    setActiveRegion(e.target.innerText);
    setIndex(2);
  };

  const removeRegionFilter = () => {
    setActiveRegion("Filter by Region");
    setIndex(0);
  };

  return (
    <CountriesContext.Provider
      value={{
        countriesData,
        index,
        activeRegion,
        isLoading,
        handleCountrySearch,
        handleRegionFilter,
        removeRegionFilter,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
