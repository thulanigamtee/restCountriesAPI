import styled from "styled-components";
import { FlexBox } from "./styledGlobal";

const StyledDetails = styled.section`
  ${FlexBox({ direction: "column", justify: "center" })};
  background: ${({ theme }) => theme.background};
  padding: 0 5%;
  gap: 0 20px;
  @media (min-width: 600px) {
    ${FlexBox({ direction: "row", justify: "space-between" })};
  }
  section {
    &:first-of-type {
      div {
        img {
          width: clamp(200px, 90vw, 300px);
          @media (min-width: 800px) {
            width: clamp(200px, 38vw, 500px);
          }
        }
      }
    }
    &:last-of-type {
      div {
        &:first-of-type {
          padding: 40px 0 20px 0;
          h1 {
            font-size: 26px;
          }
        }
        &:nth-of-type(2) {
          @media (min-width: 800px) {
            ${FlexBox({ direction: "row", justify: "space-between" })};
            width: 40vw;
            //gap: 0 20%;
          }
          section {
            margin-bottom: 30px;
            max-width: 260px;
            p {
              padding: 6px 0;
              text-transform: capitalize;
              span {
                font-weight: 600;
              }
            }
          }
        }
        &:last-of-type {
          margin-bottom: 30px;
          p {
            text-transform: capitalize;
            ${FlexBox({ direction: "column", justify: "flex-start" })};
            @media (min-width: 800px) {
              ${FlexBox({ direction: "row", justify: "flex-start" })};
              flex-wrap: wrap;
              gap: 0 20px;
              align-items: center;
              max-width: 600px;
            }
            span {
              font-weight: 600;
            }
            p {
              ${FlexBox({ direction: "row", justify: "flex-start" })};
              flex-wrap: wrap;
              gap: 10px;
              margin-top: 10px;
              @media (min-width: 800px) {
                margin-top: 0;
              }
              p {
                padding: 5px 20px;
                background: ${({ theme }) => theme.elements};
                box-shadow: ${({ theme }) => theme.boxShadow};
                border-radius: 3px;
              }
            }
          }
        }
      }
    }
  }
`;

export const BackButton = styled.button`
  ${FlexBox({ direction: "row", justify: "center" })};
  background: ${({ theme }) => theme.elements};
  align-items: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 30px 0 40px 5%;
  padding: 10px 20px;
  gap: 0 10px;
`;

export default StyledDetails;
