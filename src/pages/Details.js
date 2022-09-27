import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const Details = () => {
  const url = `https://restcountries.com/v3.1/name/{name}`;
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
  }, []);
  return <div>Details</div>;
};

export default Details;
