import React from "react";
import SearchFilter from "../components/SearchFilter";
import Countries from "../components/Countries";

const Home = () => {
  const url = "https://restcountries.com/v3.1/all";
  return (
    <>
      <SearchFilter />
      <Countries />
    </>
  );
};

export default Home;
