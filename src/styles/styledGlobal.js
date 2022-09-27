import { createGlobalStyle, css, styled } from "styled-components";

const StyleGlobal = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }
  body {
    font-family: 'Nunito Sans', sans-serif;
    background: ${({ theme }) => theme.background};
  }
  p,h1{
    color: ${({ theme }) => theme.text};
  }
  button, input{
    border: none;
    background: none;
  }
  button{
    cursor: pointer;
  }
`;

export default StyleGlobal;

export const FlexBox = ({ direction, justify }) => `
  display: flex;
  flex-direction: ${direction || ""};
  justify-content: ${justify || ""};
`;
