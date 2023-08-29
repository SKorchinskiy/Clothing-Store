import { EmptyCart, CartDropdownContainer } from "./cart-dropdown.styles";

import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../redux/selectors/cart.selector";
import DropdownItem from "../dropdown-item/dropdown-item.component";

function CartDropdown() {
  const cart = useSelector(selectCartItems);
  const itemsCount = useSelector(selectCartItemsCount);
  const navigate = useNavigate();

  const goToCheckout = () => navigate("/checkout");

  return (
    <CartDropdownContainer>
      {itemsCount ? (
        cart.map((cartItem) => (
          <DropdownItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <EmptyCart>Cart is empty!</EmptyCart>
      )}
      <Button type="button" buttonType="default-btn" onClick={goToCheckout}>
        Go To Checkout
      </Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
