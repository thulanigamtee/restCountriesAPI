import React, { useState } from "react";
import StyleGlobal from "./styles/styledGlobal";
import { ThemeProvider } from "styled-components";
import { CountriesProvider } from "./components/Context";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { light, dark } from "./styles/theme";
import { Route, Routes } from "react-router";

const App = () => {
  const [activeTheme, setActiveTheme] = useState(light);

  const handleThemeChange = () => {
    activeTheme === light ? setActiveTheme(dark) : setActiveTheme(light);
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <StyleGlobal />
      <CountriesProvider>
        <Header handleThemeChange={handleThemeChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </CountriesProvider>
    </ThemeProvider>
  );
};

export default App;
