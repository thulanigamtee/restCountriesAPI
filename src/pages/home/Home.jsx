import React from "react";
import SearchandFilter from "../../components/searchandfilter/SearchandFilter";
import Countries from "../../components/countries/Countries";

const Home = () => {
  return (
    <>
      <main>
        <SearchandFilter />
        <Countries />
      </main>
    </>
  );
};

export default Home;
