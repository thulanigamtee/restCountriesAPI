import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import StyledSearchFilter from "../styles/styledSearchFilter";
import CountriesContext from "../Context";

const SearchFilter = () => {
  const {
    name,
    activeRegion,
    handleCountrySearch,
    handleRegionFilter,
    removeRegionFilter,
  } = useContext(CountriesContext);

  const regions = ["africa", "america", "asia", "europe", "oceania"];

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
            {regions.map((region) => {
              return (
                <span onClick={handleRegionFilter} key={region}>
                  {region}
                </span>
              );
            })}
            <span onClick={removeRegionFilter}>all</span>
          </div>
        </button>
      </div>
    </StyledSearchFilter>
  );
};

export default SearchFilter;
