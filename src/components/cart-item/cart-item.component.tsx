import {
  ItemDetails,
  CartItemElement,
  CartItemContainer,
} from "./cart-item.styles";

import { memo } from "react";

export type CartItemType = {
  id: number;
  imageUrl: string;
  name: string;
  quantity: number;
  price: number;
};

type CartItemProps = {
  cartItem: CartItemType;
  increaseItemQuantity: Function;
  decreaseItemQuantity: Function;
  clearItemFromCart: Function;
};

function CartItem({
  cartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearItemFromCart,
}: CartItemProps) {
  const { imageUrl, name, quantity, price } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <CartItemElement>{name}</CartItemElement>
        <CartItemElement>
          <div className="arrow" onClick={() => decreaseItemQuantity(cartItem)}>
            &#10092;
          </div>
          {quantity}
          <div className="arrow" onClick={() => increaseItemQuantity(cartItem)}>
            &#10093;
          </div>
        </CartItemElement>
        <CartItemElement>${price}</CartItemElement>
        <CartItemElement>
          <div
            className="remove-btn"
            onClick={() => clearItemFromCart(cartItem)}
          >
            &#10005;
          </div>
        </CartItemElement>
      </ItemDetails>
    </CartItemContainer>
  );
}

export default memo(CartItem);
