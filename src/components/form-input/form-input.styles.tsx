import styled from "styled-components";

export const Input = styled.input`
  margin-top: 5px;
  height: 30px;
  font-size: 18px;
  padding: 5px;
  letter-spacing: 2px;
  border: 0px;
  border-bottom: 1px solid black;
  outline: none;

  @media screen and (max-width: 400px) {
    font-size: medium;
  }
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: Josefin Slab, sans-serif;
  letter-spacing: 2px;
  font-size: large;
  margin-bottom: 25px;

  @media screen and (max-width: 400px) {
    font-size: medium;
  }
`;
