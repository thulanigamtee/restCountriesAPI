import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import StyledSearchFilter from "../styles/styledSearchFilter";

const SearchFilter = () => {
  return (
    <StyledSearchFilter>
      <div>
        <p>
          <FaSearch />
        </p>
        <input type="text" placeholder="Search for a country..." />
      </div>
      <div>
        <button>
          <p>Filter by Region</p>
          <MdKeyboardArrowDown />
        </button>
      </div>
    </StyledSearchFilter>
  );
};

export default SearchFilter;
