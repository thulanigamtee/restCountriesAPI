import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import Country from "../../components/country/Country";

const Details = () => {
  const { name } = useParams();
  const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, [country]);

  return (
    <>
      {country.map(
        ({
          flags,
          name,
          population,
          region,
          subregion,
          capital,
          tld,
          currencies,
          languages,
          borders,
        }) => {
          return (
            <Country
              flags={flags}
              key={name}
              name={name}
              population={population}
              region={region}
              subregion={subregion}
              capital={capital}
              tld={tld}
              currencies={currencies}
              languages={languages}
              borders={borders}
              isLoading={isLoading}
            />
          );
        }
      )}
    </>
  );
};

export default Details;
