import styled from "styled-components";

const BaseButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  border: 0;
  font-family: Josefin Slab, sans-serif;
  letter-spacing: 2px;
  font-size: large;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transition-duration: 0.3s;
  }

  @media screen and (max-width: 400px) {
    height: 40px;
    font-size: medium;
    padding: 5px;
  }
`;

export const DefaultButton = styled(BaseButton)`
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  color: white;
`;

export const InvertedButton = styled(BaseButton)`
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  color: black;

  @media screen and (min-width: 400px) {
    &:hover {
      transition: 0.5s;
      background-color: rgba(0, 0, 0, 0.9);
      color: white;
    }
  }
`;

export const GoogleButton = styled(BaseButton)`
  background-color: rgb(66, 133, 244, 0.9);
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  color: white;
`;
