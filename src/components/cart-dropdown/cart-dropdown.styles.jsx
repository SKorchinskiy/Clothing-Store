import styled from "styled-components";

export const DropdownItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const DropdownItemContainer = styled.div`
  display: flex;
  padding: 20px;
`;

export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-family: "Amatic SC";
  font-size: 24px;
`;

export const CartDropdownContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  position: absolute;
  font-family: "Amatic SC";
  font-size: 24px;
  overflow: scroll;
  right: 30px;
  top: 80px;
  z-index: 10;
  width: 250px;
  height: 350px;

  img {
    width: 100px;
  }

  button {
    position: sticky;
    bottom: 15px;
    scale: 0.8;

    &:hover {
      scale: 0.9;
    }
    &:active {
      scale: 0.8;
    }
  }
`;