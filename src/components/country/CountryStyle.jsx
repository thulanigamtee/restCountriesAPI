import styled from "styled-components";
import { FlexBox } from "../../GlobalStyle";

const CountryStyle = styled.main`
  padding: 0 5%;
`;

export const BackButton = styled.button`
  ${FlexBox({ direction: "row", justify: "center" })};
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.boxShadow};
  align-items: center;
  text-transform: capitalize;
  margin: 35px 0 50px 0;
  padding: 10px 20px;
  gap: 0 10px;
`;

export const CountryInfo = styled.div`
  @media (min-width: 768px) {
    ${FlexBox({ direction: "row", justify: "space-between" })};
    gap: 0 10px;
    align-items: start;
  }
  div {
    img {
      height: clamp(100px, 100%, 240px);
      width: clamp(200px, 90vw, 320px);
      @media (min-width: 1024px) {
        width: clamp(320px, 35vw, 500px);
        max-height: 350px;
      }
    }
    h1 {
      font-size: 22px;
      margin: 40px 0 25px 0;
      @media (min-width: 768px) {
        margin: 0;
      }
      @media (min-width: 1024px) {
        margin: 40px 0 25px 0;
      }
    }
  }
`;

export const CountryDetailedInfo = styled.div`
  div {
    ${FlexBox({ direction: "column", justify: "start" })};
    gap: 40px 0;
    @media (min-width: 900px) {
      ${FlexBox({ direction: "row", justify: "space-between" })};
    }
    section {
      ul {
        ${FlexBox({ direction: "column", justify: "start" })};
        gap: 10px 0;
        li {
          ${FlexBox({ direction: "row", justify: "start" })};
          color: ${({ theme }) => theme.text};
          gap: 0 5px;
          text-transform: capitalize;
          font-weight: 600;
          white-space: nowrap;
          span {
            font-weight: normal;
            max-width: 300px;
            white-space: normal;
          }
        }
      }
    }
  }
`;

export const CountryBorders = styled.div`
  ${FlexBox({ direction: "column", justify: "start" })};
  align-items: start;
  margin: 40px 0;
  gap: 20px;
  @media (min-width: 1024px) {
    align-items: start;
  }
  h3 {
    color: ${({ theme }) => theme.text};
    font-size: 17px;
    text-transform: capitalize;
    font-weight: 600;
    white-space: nowrap;
  }
  section {
    ${FlexBox({ direction: "row", justify: "start" })};
    flex-wrap: wrap;
    gap: 10px;
    margin-top: -20px;
    max-width: 520px;
    @media (min-width: 900px) {
      margin-top: 0;
    }
    button {
      background: ${({ theme }) => theme.elements};
      color: ${({ theme }) => theme.text};
      box-shadow: ${({ theme }) => theme.boxShadow};
      padding: 10px 20px;
      border-radius: 3px;
    }
  }
`;

export default CountryStyle;
