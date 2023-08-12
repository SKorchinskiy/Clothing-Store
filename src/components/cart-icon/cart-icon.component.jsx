import { ItemCount, ShoppingIcon, CartIconContainer } from "./cart-icon.styles";

import { cartSelector } from "../../redux/selectors/cart.selector";
import { toggleCartIsOpen } from "../../redux/actions/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";

function CartIcon() {
  const { itemsCount, isCartOpen } = useSelector(cartSelector);

  const dispatch = useDispatch();
  const toggleIsCartOpen = () => dispatch(toggleCartIsOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{itemsCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
