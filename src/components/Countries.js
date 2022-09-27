import React, { useState, useEffect } from "react";
import StyledCountries from "../styles/styledCountries";
import { Link } from "react-router-dom";

const Countries = () => {
  const url = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <StyledCountries>
      {countries.map(({ name, capital, population, region, flags }) => {
        return (
          <section key={name.common}>
            <Link to="/details">
              <img src={flags.png} alt={name.common} />
            </Link>
            <div>
              <p>{name.common}</p>
              <p>
                population: <span>{population.toLocaleString()}</span>
              </p>
              <p>
                region: <span>{region}</span>
              </p>
              <p>
                capital: <span>{capital} </span>
              </p>
            </div>
          </section>
        );
      })}
    </StyledCountries>
  );
};

export default Countries;
