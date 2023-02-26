import styled from "styled-components";
import { FlexBox } from "../../GlobalStyle";

const HeaderStyle = styled.header`
  background: ${({ theme }) => theme.elements};
  ${FlexBox({ direction: "row", justify: "space-between" })};
  padding: 1.5625rem 5%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  button {
    ${FlexBox({ direction: "row", justify: "center" })};
    color: ${({ theme }) => theme.text};
    align-items: center;
    gap: 0.3125rem;
    span {
      text-transform: capitalize;
    }
  }
`;

export default HeaderStyle;
