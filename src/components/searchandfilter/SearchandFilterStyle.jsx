import styled from "styled-components";
import { FlexBox } from "../../GlobalStyle";

const SearchandFilterStyle = styled.section`
  ${FlexBox({ direction: "column", justify: "space-between" })};
  margin-top: 30px;
  padding: 0 5%;
  @media (min-width: 600px) {
    ${FlexBox({ direction: "row", justify: "space-between" })};
    align-items: center;
  }
`;

export const SearchStyle = styled.div`
  background: ${({ theme }) => theme.elements};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;
  padding: 14px 20px;
  p {
    position: absolute;
    transform: translate(15px, 4px);
    color: ${({ theme }) => theme.input};
  }
  input {
    background: ${({ theme }) => theme.elements};
    width: clamp(100px, 80vw, 300px);
    padding: 0 0 0 60px;
    color: ${({ theme }) => theme.input};
    outline: none;
  }
`;
export const FilterStyle = styled.div`
  background: ${({ theme }) => theme.elements};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;
  margin-top: 50px;
  width: clamp(200px, 60%, 100px);
  @media (min-width: 600px) {
    margin-top: 0;
  }
  button {
    ${FlexBox({ direction: "row", justify: "start" })};
    color: ${({ theme }) => theme.text};
    flex-wrap: nowrap;
    align-items: center;
    padding: 17px 20px 17px 30px;
    font-size: 13px;
    gap: 30px;
    font-weight: 100px;
    ul {
      background: ${({ theme }) => theme.elements};
      border-radius: 5px;
      &:first-of-type {
        ${FlexBox({ direction: "row", justify: "space-between" })};
        align-items: center;
        width: 140px;
      }
      &:last-of-type {
        width: clamp(200px, 60%, 100px);
        align-items: flex-start;
        gap: 10px 0;
        position: absolute;
        transform: translate(-30px, 125px);
        text-transform: capitalize;
        padding: 20px;
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
