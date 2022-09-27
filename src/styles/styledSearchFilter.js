import styled from "styled-components";
import { FlexBox } from "./styledGlobal";

const StyledSearchFilter = styled.section`
  margin-top: 40px;
  padding: 0 5%;
  ${FlexBox({ direction: "column", justify: "center" })};
  @media (min-width: 600px) {
    ${FlexBox({ direction: "row", justify: "space-between" })};
    align-items: center;
  }
  div {
    background: ${({ theme }) => theme.elements};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 5px;
    input {
      background: ${({ theme }) => theme.elements};
      width: clamp(100px, 80vw, 300px);
      padding: 0 0 0 60px;
      color: ${({ theme }) => theme.input};
      outline: none;
    }
    &:first-of-type {
      padding: 14px 20px;
      p {
        position: absolute;
        transform: translate(15px, 4px);
        color: ${({ theme }) => theme.input};
      }
    }
    &:last-of-type {
      width: clamp(200px, 60%, 100px);
      margin-top: 40px;
      @media (min-width: 600px) {
        margin-top: 0;
      }
    }
    button {
      ${FlexBox({ direction: "row", justify: "start" })};
      flex-wrap: nowrap;
      align-items: center;
      width: clamp(200px, 60%, 100px);
      padding: 17px 20px 17px 30px;
      font-size: 13px;
      gap: 30px;
      font-weight: 100px;
      color: ${({ theme }) => theme.text};
    }
  }
`;

export default StyledSearchFilter;
