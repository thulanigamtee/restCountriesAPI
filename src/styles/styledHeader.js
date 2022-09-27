import styled from "styled-components";
import { FlexBox } from "./styledGlobal";

const StyleHeader = styled.div`
  background: ${({ theme }) => theme.elements};
  ${FlexBox({ direction: "row", justify: "space-between" })};
  padding: 25px 5%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  div {
    h1 {
      font-size: 14px;
    }
    button {
      color: ${({ theme }) => theme.text};
      ${FlexBox({ direction: "row", justify: "center" })};
      align-items: center;
      gap: 5px;
      p {
        text-transform: capitalize;
        font-weight: 320;
      }
    }
  }
`;

export default StyleHeader;
