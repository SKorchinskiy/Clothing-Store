import { ItemCount, ShoppingIcon, CartIconContainer } from "./cart-icon.styles";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

function CartIcon() {
  const { itemsCount } = useContext(CartContext);

  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{itemsCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
