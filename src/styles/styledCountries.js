import styled from "styled-components";
import { FlexBox } from "./styledGlobal";

const StyledCountries = styled.section`
  ${FlexBox({ direction: "column", justify: "center" })};
  margin-top: 30px;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 600px) {
    ${FlexBox({ direction: "row", justify: "space-between" })};
    margin-top: 40px;
    padding: 0 5%;
    gap: 2%;
  }
  section {
    background: ${({ theme }) => theme.elements};
    box-shadow: ${({ theme }) => theme.boxShadow};
    margin-bottom: 20px;
    border-radius: 5px;
    width: 60vw;
    height: 320px;
    max-width: 250px;
    min-width: 200px;
    @media (min-width: 600px) {
      margin-bottom: 40px;
    }
    img {
      border-radius: 5px 5px 0 0;
      width: 60vw;
      height: 150px;
      max-width: 250px;
      min-width: 200px;
    }
    div {
      padding: 15px 20px 40px 20px;
      a {
        p {
          font-weight: 550;
          margin-bottom: 15px;
          font-weight: bold;
        }
      }
      p {
        text-transform: capitalize;
        font-weight: 550;
        margin-bottom: 5px;
        span {
          font-weight: normal;
        }
      }
    }
  }
`;

export default StyledCountries;
