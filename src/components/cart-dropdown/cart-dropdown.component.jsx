import {
  EmptyCart,
  CartDropdownContainer,
  DropdownItemContainer,
  DropdownItemDetails,
} from "./cart-dropdown.styles";

import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../redux/selectors/cart.selector";

function CartDropdown() {
  const cart = useSelector(selectCartItems);
  const itemsCount = useSelector(selectCartItemsCount);
  const navigate = useNavigate();

  const goToCheckout = () => navigate("/checkout");

  return (
    <CartDropdownContainer>
      {itemsCount ? (
        cart.map((cartItem) => (
          <DropdownItemContainer key={cartItem.id}>
            <img src={cartItem.imageUrl} alt={cartItem.name} />
            <DropdownItemDetails>
              <div>{cartItem.name}</div>
              <div>
                {cartItem.quantity} x ${cartItem.price}
              </div>
            </DropdownItemDetails>
          </DropdownItemContainer>
        ))
      ) : (
        <EmptyCart>Cart is empty!</EmptyCart>
      )}
      <Button
        type="button"
        value="Go To Checkout"
        additionalClasses="default-btn"
        onClick={goToCheckout}
      />
    </CartDropdownContainer>
  );
}

export default CartDropdown;
