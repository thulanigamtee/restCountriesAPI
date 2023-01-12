import React, { useContext } from "react";
import SearchandFilterStyle, {
  SearchStyle,
  FilterStyle,
} from "./SearchandFilterStyle";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CountriesContext } from "../../store/Context";

const SearchandFilter = () => {
  const {
    regions,
    name,
    activeRegion,
    handleRegionFilter,
    handleCountrySearch,
  } = useContext(CountriesContext);

  return (
    <SearchandFilterStyle>
      <SearchStyle>
        <p>
          <FaSearch />
        </p>
        <input
          type="text"
          placeholder="Search for a country..."
          value={name}
          onChange={handleCountrySearch}
        />
      </SearchStyle>
      <FilterStyle>
        <button
          type="button"
          onClick={() =>
            document.getElementById("regions").classList.toggle("active")
          }
        >
          <ul>
            <li>{activeRegion}</li>
            <li>
              <MdKeyboardArrowDown />
            </li>
          </ul>
          <ul id="regions">
            {regions.map((region) => {
              return (
                <li key={region} onClick={handleRegionFilter}>
                  {region}
                </li>
              );
            })}
            <li onClick={handleRegionFilter}>remove filter</li>
          </ul>
        </button>
      </FilterStyle>
    </SearchandFilterStyle>
  );
};

export default SearchandFilter;
