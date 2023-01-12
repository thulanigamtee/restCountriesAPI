import styled from "styled-components";
import { FlexBox } from "../../GlobalStyle";

const CountryStyle = styled.main`
  padding: 0 5%;
`;

export const BackButton = styled.button`
  ${FlexBox({ direction: "row", justify: "center" })};
  background: ${({ theme }) => theme.elements};
  align-items: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 35px 0 50px 0;
  padding: 10px 20px;
  gap: 0 10px;
`;

export const CountryInfo = styled.div`
  @media (min-width: 600px) {
    ${FlexBox({ direction: "row", justify: "space-between" })};
    gap: 0 10px;
  }
  div {
    img {
      height: clamp(100px, 100%, 240px);
      width: clamp(200px, 90vw, 320px);
    }
    h1 {
      font-size: 22px;
      margin: 40px 0 25px 0;
    }
  }
`;

export const CountryDetailedInfo = styled.div`
  div {
    ${FlexBox({ direction: "column", justify: "start" })};
    gap: 40px 0;
    @media (min-width: 768px) {
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
          overflow: hidden;
          span {
            font-weight: normal;
          }
        }
      }
    }
  }
`;

export const CountryBorders = styled.div`
  ${FlexBox({ direction: "column", justify: "start" })};
  margin: 40px 0;
  @media (min-width: 1024px) {
    ${FlexBox({ direction: "row", justify: "start" })};
  }
  h3 {
    color: ${({ theme }) => theme.text};
    font-size: 17px;
    text-transform: capitalize;
    font-weight: 600;
  }
  button {
    ${FlexBox({ direction: "row", justify: "flex-start" })};
    flex-wrap: wrap;
    gap: 5px;
    span {
      background: ${({ theme }) => theme.elements};
      color: ${({ theme }) => theme.text};
      padding: 10px 20px;
      border-radius: 3px;
    }
  }
`;

export default CountryStyle;
