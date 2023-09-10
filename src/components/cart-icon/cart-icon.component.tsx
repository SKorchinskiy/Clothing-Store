import { ItemCount, ShoppingIcon, CartIconContainer } from "./cart-icon.styles";

import {
  selectCartItemsCount,
  selectIsCartOpen,
} from "../../redux/selectors/cart.selector";
import { toggleCartIsOpen } from "../../redux/actions/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { ForwardedRef, PropsWithChildren, forwardRef, useEffect } from "react";

function CartIcon(
  _props: PropsWithChildren<{}>,
  ref: ForwardedRef<HTMLImageElement>
) {
  const isCartOpen = useSelector(selectIsCartOpen);
  const itemsCount = useSelector(selectCartItemsCount);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleCartIsOpen(false));
  }, [dispatch]);

  const toggleIsCartOpen = () => dispatch(toggleCartIsOpen(!isCartOpen));

  return (
    <CartIconContainer
      title="cart-icon-container"
      ref={ref}
      onClick={toggleIsCartOpen}
    >
      <ShoppingIcon title="shopping-bag" />
      <ItemCount>{itemsCount}</ItemCount>
    </CartIconContainer>
  );
}

export default forwardRef(CartIcon);
