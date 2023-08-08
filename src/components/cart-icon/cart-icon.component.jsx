import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

function CartIcon() {
  const { itemsCount } = useContext(CartContext);

  return (
    <div className="cart-icon-container">
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
}

export default CartIcon;
