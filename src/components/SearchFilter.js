import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import StyledSearchFilter from "../styles/styledSearchFilter";
import CountriesContext from "./Context";

const SearchFilter = () => {
  const {
    name,
    activeRegion,
    handleCountrySearch,
    handleRegionFilter,
    removeRegionFilter,
  } = useContext(CountriesContext);

  const handleDropDown = () => {
    document.getElementById("regions").classList.toggle("active");
  };

  return (
    <StyledSearchFilter>
      <div>
        <p>
          <FaSearch />
        </p>
        <input
          type="text"
          placeholder="Search for a country..."
          value={name}
          onChange={handleCountrySearch}
        />
      </div>
      <div>
        <button onClick={handleDropDown}>
          <p>{activeRegion}</p>
          <MdKeyboardArrowDown />
          <div id="regions">
            <span onClick={handleRegionFilter}>africa</span>
            <span onClick={handleRegionFilter}>america</span>
            <span onClick={handleRegionFilter}>asia</span>
            <span onClick={handleRegionFilter}>europe</span>
            <span onClick={handleRegionFilter}>oceania</span>
            <span onClick={removeRegionFilter}>all</span>
          </div>
        </button>
      </div>
    </StyledSearchFilter>
  );
};

export default SearchFilter;
