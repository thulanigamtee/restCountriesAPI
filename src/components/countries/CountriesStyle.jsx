import styled from "styled-components";
import { FlexBox } from "../../GlobalStyle";

const CountriesStyle = styled.section`
  ${FlexBox({ direction: "column", justify: "center" })};
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1.875rem;
  @media (min-width: 37.5rem) {
    ${FlexBox({ direction: "row", justify: "space-between" })};
    margin-top: 2.5rem;
    padding: 0 5%;
    gap: 2%;
  }
  div {
    background: ${({ theme }) => theme.elements};
    box-shadow: ${({ theme }) => theme.boxShadow};
    width: clamp(12.5rem, 60vw, 15.625rem);
    height: 20rem;
    margin-bottom: 2.5rem;
    border-radius: 0.3125rem;
    overflow: hidden;
    img {
      border-radius: 0.3125rem 0.3125rem 0 0;
      width: clamp(12.5rem, 60vw, 15.625rem);
      height: 9.375rem;
      transition: 0.2s;
    }
  }
`;

export const CountryInfoStyle = styled.section`
  padding: 0.9375rem 1.25rem 0 1.25rem;
  h2 {
    font-size: 1.125rem;
  }
  ul {
    ${FlexBox({ direction: "column", justify: "start" })};
    gap: 0.3125rem 0;
    margin-top: 0.9375rem;
    li {
      ${FlexBox({ direction: "row", justify: "start" })};
      color: ${({ theme }) => theme.text};
      gap: 0 0.3125rem;
      text-transform: capitalize;
      font-weight: 600;
      overflow: hidden;
      span {
        font-weight: normal;
      }
    }
  }
`;
export default CountriesStyle;
