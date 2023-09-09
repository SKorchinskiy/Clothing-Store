import styled from "styled-components";

export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-family: "Amatic SC";
  font-size: 24px;
`;

export const CheckoutResumeContainer = styled.div`
  width: 100%;
  text-align: right;
  font-family: "Amatic SC";
  font-size: 32px;
  margin-right: 50px;
`;

export const CartItemsContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  margin-bottom: 50px;
`;

export const CartItemsHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  border-bottom: 1px solid black;
  margin-bottom: 50px;
`;

export const CheckoutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
`;
