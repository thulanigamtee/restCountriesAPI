import React from "react";
import StyleHeader from "../styles/styledHeader";
import { FaRegMoon } from "react-icons/fa";

const Header = ({ handleThemeChange }) => {
  return (
    <StyleHeader>
      <div>
        <h1>Where in the world?</h1>
      </div>
      <div>
        <button onClick={handleThemeChange}>
          <FaRegMoon />
          <p>dark mode</p>
        </button>
      </div>
    </StyleHeader>
  );
};

export default Header;
