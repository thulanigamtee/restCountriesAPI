import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { light, dark } from "./theme";
import { ThemeProvider } from "styled-components";
import CountriesProvider from "./store/Context";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";

function App() {
  const [activeTheme, setActiveTheme] = useState(dark);

  const handleThemeChange = () => {
    activeTheme === dark ? setActiveTheme(light) : setActiveTheme(dark);
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle />
      <CountriesProvider>
        <Header handleThemeChange={handleThemeChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </CountriesProvider>
    </ThemeProvider>
  );
}

export default App;
