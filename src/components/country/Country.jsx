import React, { useState, useEffect } from "react";
import CountryStyle, {
  BackButton,
  CountryInfo,
  CountryDetailedInfo,
  CountryBorders,
} from "./CountryStyle";
import { BsArrowLeft } from "react-icons/bs";

const Country = ({
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
  const [borderCountries, setBorderCountries] = useState([]);
  const borderCodes = [];
  for (let i = 0; i < borders.length; i++) {
    borderCodes[i] = borders[i];
  }
  const bordersUrl = `https://restcountries.com/v3.1/alpha?codes=`;
  const borderNames = bordersUrl + borderCodes.join(",");

  useEffect(() => {
    fetch(borderNames)
      .then((response) => response.json())
      .then((data) => setBorderCountries(data))
      .catch(console.error);
  }, [borderCountries]);

  const langs = Object.values(languages);
  const native = Object.values(name.nativeName);
  const currency = Object.values(currencies);

  const returnNativeName = () => {
    let nat = [];
    for (let i = 0; i < native.length; i++) {
      nat[i] = native[i];
    }
    return nat[native.length - 1].common;
  };

  const returnLanguages = () => {
    let lang = [];
    for (let i = 0; i < langs.length; i++) {
      lang[i] = langs[i];
    }
    return lang.join(", ");
  };

  const returnCapital = () => {
    let cap = [];
    for (let i = 0; i < capital.length; i++) {
      cap[i] = capital[i];
    }
    return cap.join(", ");
  };

  return (
    <CountryStyle>
      <BackButton>
        <BsArrowLeft />
        <span>back</span>
      </BackButton>
      <CountryInfo>
        <div>
          <img src={flags.png} alt={`${name.common} flag`} />
        </div>
        <div>
          <div>
            <h1>{name.common}</h1>
          </div>
          <CountryDetailedInfo>
            <div>
              <section>
                <ul>
                  <li>
                    native name: <span>{returnNativeName()}</span>
                  </li>
                  <li>
                    population: <span>{population.toLocaleString()}</span>
                  </li>
                  <li>
                    region: <span>{region}</span>
                  </li>
                  <li>
                    sub region: <span>{subregion}</span>
                  </li>
                  <li>
                    capital:
                    <span>{returnCapital()}</span>
                  </li>
                </ul>
              </section>
              <section>
                <ul>
                  <li>
                    top level domain: <span>{tld}</span>
                  </li>
                  <li>
                    currencies: <span>{currency[0].name}</span>
                  </li>
                  <li>
                    languages: <span>{returnLanguages()}</span>
                  </li>
                </ul>
              </section>
            </div>
            <CountryBorders>
              <h3>border countries: </h3>
              <button>
                {borderCountries.map(({ name }) => {
                  return <span key={name.common}>{name.common}</span>;
                })}
              </button>
            </CountryBorders>
          </CountryDetailedInfo>
        </div>
      </CountryInfo>
    </CountryStyle>
  );
};

export default Country;
