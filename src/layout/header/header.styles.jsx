import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  font-family: Comfortaa, serif;
  font-size: large;

  @media screen and (max-width: 400px) {
    font-size: medium;
  }
`;

export const HeaderContainerSide = styled.div`
  width: 50%;
  display: flex;
  padding: 20px 0px;
  justify-content: ${({ $side }) => $side};

  @media screen and (max-width: 400px) {
    width: ${({ $side }) => ($side === "left" ? "30%" : "70%")};
  }
`;

export const HeaderContainerElement = styled(Link)`
  padding: 10px;
  text-decoration: none;
  text-align: center;
  margin-right: 10px;
  color: black;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    margin-right: 5px;
  }

  &:last-child {
    margin-right: 0;
  }
`;
