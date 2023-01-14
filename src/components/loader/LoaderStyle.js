import styled from "styled-components";
import { FlexBox } from "./styledGlobal";

const StyledLoader = styled.div`
  ${FlexBox({ direction: "row", justify: "center" })};
  gap: 10px;
  margin-top: 140px;
  span {
    background: ${({ theme }) => theme.text};
    width: 10px;
    height: 60px;
    border-radius: 50px;
    position: absolute;
    &:first-of-type {
      animation: animate 1.2s infinite ease-in backwards alternate;
      animation-delay: 0.1s;
    }
    &:nth-of-type(2) {
      transform: rotate(30deg) translate(26px, -10px);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 0.2s;
    }
    &:nth-of-type(3) {
      transform: rotate(60deg) translate(43px, -30px);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 0.3;
    }
    &:nth-of-type(4) {
      transform: rotate(90deg) translate(50px, -50px);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 0.4s;
    }
    &:nth-of-type(5) {
      transform: rotate(120deg) translate(45px, -77px);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 0.5s;
    }
    &:nth-of-type(6) {
      transform: rotate(150deg) translate(25px, -95px);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 0.6s;
    }
    &:nth-of-type(7) {
      transform: translate(0px, 100px);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 0.7s;
    }
    &:nth-of-type(8) {
      transform: rotate(210deg) translate(-25px, -95px);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 0.8s;
    }
    &:nth-of-type(9) {
      transform: rotate(240deg) translate(-43px, -77px);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 0.9s;
    }
    &:nth-of-type(10) {
      transform: rotate(90deg) translate(50px, 50px);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 1s;
    }
    &:nth-of-type(11) {
      transform: rotate(300deg) translate(-44px, -25px);
      animation: animate 1s infinite ease-in backwards alternate;
      animation-delay: 1.1s;
    }
    &:nth-of-type(12) {
      transform: rotate(330deg) translate(-26px, -10px);
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

export default StyledLoader;
