import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export type ShoppingIconProps = {
  title: string;
};

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 23px;
`;

export const ShoppingIcon = styled(ShoppingSvg)<ShoppingIconProps>`
  width: 24px;
  height: 24px;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: flex-start;
  top: 7px;
  justify-content: center;
  cursor: pointer;
`;
