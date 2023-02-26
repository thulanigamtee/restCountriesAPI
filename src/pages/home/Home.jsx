import React, { useContext } from "react";
import SearchandFilter from "../../components/searchandfilter/SearchandFilter";
import Countries from "../../components/countries/Countries";
import { CountriesContext } from "../../store/Context";
import Loader from "../../components/loader/Loader";

const Home = () => {
  const { isLoading } = useContext(CountriesContext);
  return (
    <>
      {isLoading ? (
        <main>
          <Loader />
        </main>
      ) : (
        <main>
          <SearchandFilter />
          <Countries />
        </main>
      )}
    </>
  );
};

export default Home;
