import styled from "styled-components";
import { FlexBox } from "../../GlobalStyle";

const LoaderStyle = styled.div`
  ${FlexBox({ direction: "row", justify: "center" })};
  gap: 0.625rem;
  margin-top: 8.75rem;
  span {
    background: ${({ theme }) => theme.text};
    width: 0.625rem;
    height: 3.75rem;
    border-radius: 3.125rem;
    position: absolute;
    &:first-of-type {
      animation: animate 1.2s infinite ease-in backwards alternate;
      animation-delay: 0.1s;
    }
    &:nth-of-type(2) {
      transform: rotate(30deg) translate(1.625rem, -0.625rem);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 0.2s;
    }
    &:nth-of-type(3) {
      transform: rotate(60deg) translate(2.6875rem, -1.875rem);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 0.3;
    }
    &:nth-of-type(4) {
      transform: rotate(90deg) translate(3.125rem, -3.125rem);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 0.4s;
    }
    &:nth-of-type(5) {
      transform: rotate(120deg) translate(2.8125rem, -4.8125rem);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 0.5s;
    }
    &:nth-of-type(6) {
      transform: rotate(150deg) translate(1.5625rem, -5.9375rem);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 0.6s;
    }
    &:nth-of-type(7) {
      transform: translate(0rem, 6.25rem);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 0.7s;
    }
    &:nth-of-type(8) {
      transform: rotate(210deg) translate(-1.5625rem, -5.9375rem);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 0.8s;
    }
    &:nth-of-type(9) {
      transform: rotate(240deg) translate(-2.6875rem, -4.8125rem);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 0.9s;
    }
    &:nth-of-type(10) {
      transform: rotate(90deg) translate(3.125rem, 3.125rem);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 1s;
    }
    &:nth-of-type(11) {
      transform: rotate(300deg) translate(-2.75rem, -1.5625rem);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 1.1s;
    }
    &:nth-of-type(12) {
      transform: rotate(330deg) translate(-1.625rem, -0.625rem);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 1.2s;
    }
  }
  @keyframes animate {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default LoaderStyle;
