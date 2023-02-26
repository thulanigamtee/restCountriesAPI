import React, { useContext } from "react";
import CountriesStyle, { CountryInfoStyle } from "./CountriesStyle";
import { CountriesContext } from "../../store/Context";
import { Link } from "react-router-dom";

const Countries = () => {
  const { countriesData, dataIndex } = useContext(CountriesContext);
  return (
    <CountriesStyle>
      {countriesData[dataIndex].map(
        ({ name, capital, population, region, flags }) => {
          // const returnCapitals = () => {
          //   let cap = [];
          //   for (let i = 0; i < capital.length; i++) {
          //     cap[i] = capital[i];
          //   }
          //   return cap.join(", ");
          // };
          return (
            <div key={name.common}>
              <img src={flags.png} alt={name.common} />
              <CountryInfoStyle>
                <Link to={`details/${name.common}`}>
                  <h2>{name.common}</h2>
                </Link>
                <ul>
                  <li>
                    population: <span>{population.toLocaleString()}</span>
                  </li>
                  <li>
                    region: <span>{region}</span>
                  </li>
                  <li>
                    capital: <span>{capital}</span>
                  </li>
                </ul>
              </CountryInfoStyle>
            </div>
          );
        }
      )}
    </CountriesStyle>
  );
};

export default Countries;
