import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const AuthBody = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
