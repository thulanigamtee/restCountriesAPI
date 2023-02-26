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
  margin: 2.1875rem 0 3.125rem 0;
  padding: 0.625rem 1.25rem;
  gap: 0 0.625rem;
`;

export const CountryInfo = styled.div`
  @media (min-width: 48rem) {
    ${FlexBox({ direction: "row", justify: "flex-start" })};
    gap: 0 10%;
    align-items: start;
  }
  div {
    img {
      height: clamp(6.25rem, 100%, 15rem);
      width: clamp(12.5rem, 90vw, 20rem);
      @media (min-width: 64rem) {
        width: clamp(20rem, 35vw, 31.25rem);
        max-height: 21.875rem;
      }
    }
    h1 {
      font-size: 1.375rem;
      margin: 2.5rem 0 1.5625rem 0;
      @media (min-width: 48rem) {
        margin: 0;
      }
      @media (min-width: 64rem) {
        margin: 2.5rem 0 1.5625rem 0;
      }
    }
  }
`;

export const CountryDetailedInfo = styled.div`
  div {
    ${FlexBox({ direction: "column", justify: "start" })};
    gap: 2.5rem 0;
    @media (min-width: 56.25rem) {
      ${FlexBox({ direction: "row", justify: "start" })};
      gap: 0 10%;
    }
    section {
      ul {
        ${FlexBox({ direction: "column", justify: "start" })};
        gap: 0.625rem 0;
        li {
          ${FlexBox({ direction: "row", justify: "start" })};
          color: ${({ theme }) => theme.text};
          gap: 0 0.3125rem;
          text-transform: capitalize;
          font-weight: 600;
          white-space: nowrap;
          span {
            font-weight: normal;
            max-width: 18.75rem;
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
  margin: 2.5rem 0;
  gap: 1.25rem;
  @media (min-width: 64rem) {
    align-items: start;
  }
  h3 {
    color: ${({ theme }) => theme.text};
    font-size: 1.0625rem;
    text-transform: capitalize;
    font-weight: 600;
    white-space: nowrap;
  }
  section {
    ${FlexBox({ direction: "row", justify: "start" })};
    flex-wrap: wrap;
    gap: 0.625rem;
    margin-top: -1.25rem;
    max-width: 32.5rem;
    @media (min-width: 56.25rem) {
      margin-top: 0;
    }
    button {
      background: ${({ theme }) => theme.elements};
      color: ${({ theme }) => theme.text};
      box-shadow: ${({ theme }) => theme.boxShadow};
      padding: 0.625rem 1.25rem;
      border-radius: 0.1875rem;
    }
  }
`;

export default CountryStyle;
