import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }
  body {
    font-family: 'Nunito Sans', sans-serif;
    background: ${({ theme }) => theme.background};
    max-width: 1440px;
    margin: auto;
  }
  ul{
    li{
      list-style:none;
    }
  }
  a{
    text-decoration: none;
  }
  p,h1,h2{
    color: ${({ theme }) => theme.text};
  }
  h1{
    font-size:14px;
  }
  h2{
    font-size:16px;
  }
  button, input{
    border: none;
    background: none;
  }
  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;

export const FlexBox = ({ direction, justify }) => `
  display: flex;
  flex-direction: ${direction || ""};
  justify-content: ${justify || ""};
`;
