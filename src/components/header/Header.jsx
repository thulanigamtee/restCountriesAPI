import React from "react";
import { FaRegMoon } from "react-icons/fa";
import HeaderStyle from "./HeaderStyle";

const Header = ({ handleThemeChange }) => {
  return (
    <HeaderStyle>
      <h1>Where in the world?</h1>
      <button type="button" onClick={handleThemeChange}>
        <FaRegMoon />
        <span>dark mode</span>
      </button>
    </HeaderStyle>
  );
};

export default Header;
