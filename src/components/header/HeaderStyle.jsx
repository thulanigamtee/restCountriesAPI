import styled from "styled-components";
import { FlexBox } from "../../GlobalStyle";

const HeaderStyle = styled.header`
  background: ${({ theme }) => theme.elements};
  ${FlexBox({ direction: "row", justify: "space-between" })};
  padding: 25px 5%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  div {
    button {
      color: ${({ theme }) => theme.text};
      ${FlexBox({ direction: "row", justify: "center" })};
      align-items: center;
      gap: 5px;
      span {
        text-transform: capitalize;
      }
    }
  }
`;

export default HeaderStyle;
