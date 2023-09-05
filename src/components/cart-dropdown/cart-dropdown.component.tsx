import { EmptyCart, CartDropdownContainer } from "./cart-dropdown.styles";

import { useNavigate } from "react-router-dom";

import Button, { ButtonType } from "../button/button.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../redux/selectors/cart.selector";
import { CartItemType } from "../cart-item/cart-item.component";
import DropdownItem from "../dropdown-item/dropdown-item.component";

function CartDropdown() {
  const cart = useSelector(selectCartItems);
  const itemsCount = useSelector(selectCartItemsCount);
  const navigate = useNavigate();

  const goToCheckout = () => navigate("/checkout");

  return (
    <CartDropdownContainer>
      {itemsCount ? (
        cart.map((cartItem: CartItemType) => (
          <DropdownItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <EmptyCart>Cart is empty!</EmptyCart>
      )}
      <Button
        type="button"
        buttonType={ButtonType.default}
        onClick={goToCheckout}
      >
        Go To Checkout
      </Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
