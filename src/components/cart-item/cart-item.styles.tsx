import styled from "styled-components";

export const ItemDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const CartItemElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .arrow {
    cursor: pointer;
    user-select: none;
  }

  .remove-btn {
    cursor: pointer;
  }
`;

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  font-family: "Amatic SC";
  font-size: 24px;
  letter-spacing: 2px;

  img {
    width: 90px;
    margin-left: auto;
    margin-right: auto;
  }
`;
