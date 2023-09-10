import styled from "styled-components";

export const ProductItemDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  font-family: "Amatic SC";
  font-size: 24px;
  margin: auto;
  width: 200px;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
  }

  button {
    width: 90%;
    position: absolute;
    bottom: 10%;
    opacity: 0;
  }

  &:hover {
    button {
      opacity: 0.85;
      transition: 0.3s;

      &:active {
        scale: 0.9;
      }
    }
    img {
      opacity: 0.8;
    }

    scale: 1.01;
    transition-duration: 0.3s;
  }
`;
