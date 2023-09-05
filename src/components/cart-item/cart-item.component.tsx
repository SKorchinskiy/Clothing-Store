import "./cart-item.styles.scss";

import { memo } from "react";

export type CartItemType = {
  id: number;
  imageUrl: string;
  name: string;
  quantity: number;
  price: number;
};

type CartItemInputType = {
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
}: CartItemInputType) {
  const { imageUrl, name, quantity, price } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <div className="cart-item-element">{name}</div>
        <div className="cart-item-element">
          <div className="arrow" onClick={() => decreaseItemQuantity(cartItem)}>
            &#10092;
          </div>
          {quantity}
          <div className="arrow" onClick={() => increaseItemQuantity(cartItem)}>
            &#10093;
          </div>
        </div>
        <div className="cart-item-element">${price}</div>
        <div className="cart-item-element">
          <div
            className="remove-btn"
            onClick={() => clearItemFromCart(cartItem)}
          >
            &#10005;
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CartItem);
