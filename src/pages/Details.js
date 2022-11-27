import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import StyledDetails from "../styles/styledDetails";
import { BackButton } from "../styles/styledDetails";
import { BsArrowLeft } from "react-icons/bs";

const Details = () => {
  const { name } = useParams();
  //const { alpha3Code } = useParams();
  const url = `https://restcountries.com/v2/name/${name}?fullText=true`;
  //const url = `https://restcountries.com/v2/alpha/${alpha3Code}`;
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [url]);

  return (
    <>
      {country.map(
        ({
          name,
          nativeName,
          capital,
          population,
          region,
          subregion,
          flags,
          currencies,
          languages,
          topLevelDomain,
          borders,
        }) => {
          const returnLanguages = () => {
            let lang = [];
            for (let i = 0; i < languages.length; i++) {
              lang[i] = languages[i].name;
            }
            return lang.join(", ");
          };

          return (
            <>
              <Link to="/">
                <BackButton>
                  <BsArrowLeft />
                  <p>back</p>
                </BackButton>
              </Link>
              <StyledDetails key={name}>
                <section>
                  <div>
                    <img src={flags.svg} alt={name} />
                  </div>
                </section>
                <section>
                  <div>
                    <h1>{name}</h1>
                  </div>
                  <div>
                    <section>
                      <p>
                        <span>native name: </span>
                        {nativeName}
                      </p>
                      <p>
                        <span>population: </span>
                        {population.toLocaleString()}
                      </p>
                      <p>
                        <span>region: </span>
                        {region}
                      </p>
                      <p>
                        <span>sub region: </span>
                        {subregion}
                      </p>
                      <p>
                        <span>capital: </span>
                        {capital}
                      </p>
                    </section>
                    <section>
                      <p>
                        <span>top level domain: </span>
                        {topLevelDomain}
                      </p>
                      <p>
                        <span>currencies: </span>
                        {currencies[0].name}
                      </p>
                      <p>
                        <span>languages: </span>
                        {returnLanguages()}
                      </p>
                    </section>
                  </div>
                  <div>
                    <p>
                      <span>border countries: </span>
                      {borders ? (
                        <p>
                          {borders.map((border) => {
                            return <p key={border}>{border}</p>;
                          })}
                        </p>
                      ) : (
                        <p>no border countries</p>
                      )}
                    </p>
                  </div>
                </section>
              </StyledDetails>
            </>
          );
        }
      )}
    </>
  );
};
export default Details;
