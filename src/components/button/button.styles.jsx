import styled from "styled-components";

const BaseButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  border: 0;
  font-family: Josefin Slab, sans-serif;
  letter-spacing: 2px;
  font-size: large;
  cursor: pointer;

  &:hover {
    scale: 105%;
    user-select: none;
    transition-duration: 0.4s;
  }

  &:active {
    transition-duration: 0.1s;
    scale: 95%;
  }
`;

export const DefaultButton = styled(BaseButton)`
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  color: white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    color: black;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  color: black;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
  }
`;

export const GoogleButton = styled(BaseButton)`
  background-color: rgb(66, 133, 244, 0.9);
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  color: white;
`;
