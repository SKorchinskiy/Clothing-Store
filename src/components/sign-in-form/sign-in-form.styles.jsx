import styled from "styled-components";

export const SignInOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
`;

export const SignInFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignInFormHeader = styled.div`
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
`;
