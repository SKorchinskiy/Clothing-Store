import { ItemCount, ShoppingIcon, CartIconContainer } from "./cart-icon.styles";

import {
  selectCartItemsCount,
  selectIsCartOpen,
} from "../../redux/selectors/cart.selector";
import { toggleCartIsOpen } from "../../redux/actions/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export type ShoppingIconProps = {
  title: string;
};

function CartIcon() {
  const isCartOpen = useSelector(selectIsCartOpen);
  const itemsCount = useSelector(selectCartItemsCount);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleCartIsOpen(false));
  }, [dispatch]);

  const toggleIsCartOpen = () => dispatch(toggleCartIsOpen(!isCartOpen));

  return (
    <CartIconContainer title="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon title="shopping-bag" />
      <ItemCount>{itemsCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
