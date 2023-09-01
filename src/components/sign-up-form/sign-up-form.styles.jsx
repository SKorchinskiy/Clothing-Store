import styled from "styled-components";

export const SignUpFormContainer = styled.form`
  margin-bottom: 50px;
`;

export const SignUpFormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpFormHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 40px;
  font-family: Josefin Slab, sans-serif;

  h3 {
    font-family: Josefin Slab, sans-serif;
    letter-spacing: 2px;
    font-size: 24px;
  }

  @media screen and (max-width: 400px) {
    text-align: center;
    font-size: medium;
    margin-bottom: 30px;

    h3 {
      font-size: medium;
    }
  }
`;
