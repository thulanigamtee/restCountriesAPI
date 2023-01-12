import styled from "styled-components";
import { FlexBox } from "../../GlobalStyle";

const CountriesStyle = styled.section`
  ${FlexBox({ direction: "column", justify: "center" })};
  flex-wrap:wrap;
  align-items:center;
  margin-top:30px;
  @media (min-width: 600px) {
    ${FlexBox({ direction: "row", justify: "space-between" })};
    margin-top: 40px;
    padding: 0 5%;
    gap: 2%;
  }
  div{
    background: ${({ theme }) => theme.elements};
    box-shadow: ${({ theme }) => theme.boxShadow};
    width: clamp(200px, 60vw, 250px);
    height:320px;
    margin-bottom:40px;
    border-radius:5px;
    overflow:hidden;
    img{
      border-radius: 5px 5px 0 0;
      width: clamp(200px, 60vw, 250px);
      height: 150px;
      transition:0.2s;
      // &:hover{
      //   transform:scale(1.2);
      //   transition:0.5s;
      // }
    }
  }
  }
`;
export const CountryInfoStyle = styled.section`
  padding: 15px 20px 0 20px;
  ul {
    ${FlexBox({ direction: "column", justify: "start" })};
    gap: 5px 0;
    margin-top: 15px;
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
`;
export default CountriesStyle;
