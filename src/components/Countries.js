import React, { useContext } from "react";
import StyledCountries from "../styles/styledCountries";
import { Link } from "react-router-dom";
import CountriesContext from "./Context";

const Countries = () => {
  const { data, index } = useContext(CountriesContext);
  return (
    <StyledCountries>
      {data[index].map(({ name, capital, population, region, flags }) => {
        return (
          <section key={name.common}>
            <Link to={`details/${name.common}`}>
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
