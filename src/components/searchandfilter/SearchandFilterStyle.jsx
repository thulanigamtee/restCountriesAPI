import styled from "styled-components";
import { FlexBox } from "../../GlobalStyle";

const SearchandFilterStyle = styled.section`
  ${FlexBox({ direction: "column", justify: "space-between" })};
  margin-top: 1.875rem;
  padding: 0 5%;
  @media (min-width: 37.5rem) {
    ${FlexBox({ direction: "row", justify: "space-between" })};
    align-items: center;
  }
`;

export const SearchStyle = styled.div`
  background: ${({ theme }) => theme.elements};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 0.3125rem;
  padding: 0.875rem 1.25rem;
  p {
    position: absolute;
    transform: translate(0.9375rem, 0.25rem);
    color: ${({ theme }) => theme.input};
  }
  input {
    background: ${({ theme }) => theme.elements};
    width: clamp(6.25rem, 80vw, 18.75rem);
    padding: 0 0 0 3.75rem;
    color: ${({ theme }) => theme.input};
    outline: none;
  }
`;
export const FilterStyle = styled.div`
  background: ${({ theme }) => theme.elements};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 0.3125rem;
  margin-top: 3.125rem;
  width: clamp(12.5rem, 60%, 6.25rem);
  @media (min-width: 37.5rem) {
    margin-top: 0;
  }
  button {
    ${FlexBox({ direction: "row", justify: "start" })};
    color: ${({ theme }) => theme.text};
    flex-wrap: nowrap;
    align-items: center;
    padding: 1.0625rem 1.25rem 1.0625rem 1.875rem;
    font-size: 0.8125rem;
    gap: 1.875rem;
    font-weight: 6.25rem;
    ul {
      background: ${({ theme }) => theme.elements};
      border-radius: 0.3125rem;
      &:first-of-type {
        ${FlexBox({ direction: "row", justify: "space-between" })};
        align-items: center;
        width: 8.75rem;
      }
      &:last-of-type {
        width: clamp(12.5rem, 60%, 6.25rem);
        align-items: flex-start;
        gap: 0.625rem 0;
        position: absolute;
        transform: translate(-1.875rem, 7.8125rem);
        text-transform: capitalize;
        padding: 1.25rem;
        display: none;
        &.active {
          ${FlexBox({ direction: "column", justify: "space-between" })};
        }
        li {
          width: 100%;
          text-align: left;
          &:hover {
            background: ${({ theme }) => theme.text};
            color: ${({ theme }) => theme.elements};
          }
        }
      }
    }
  }
`;
export default SearchandFilterStyle;
