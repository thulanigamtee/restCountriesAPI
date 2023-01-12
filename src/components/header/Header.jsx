import React from "react";
import { FaRegMoon } from "react-icons/fa";
import HeaderStyle from "./HeaderStyle";

const Header = ({ handleThemeChange }) => {
  return (
    <HeaderStyle>
      <div>
        <h1>Where in the world?</h1>
      </div>
      <div>
        <button type="button" onClick={handleThemeChange}>
          <FaRegMoon />
          <span>dark mode</span>
        </button>
      </div>
    </HeaderStyle>
  );
};

export default Header;
