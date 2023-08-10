import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  font-family: Comfortaa, serif;
  font-size: large;
`;

export const HeaderContainerSide = styled.div`
  width: 50%;
  display: flex;
  padding: 20px 0px;
  justify-content: ${({ $side }) => $side};
`;

export const HeaderContainerElement = styled(Link)`
  padding: 10px;
  text-decoration: none;
  text-align: center;
  margin-right: 10px;
  color: black;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;
