import {
  EmptyCart,
  CartDropdownContainer,
  DropdownItemContainer,
  DropdownItemDetails,
} from "./cart-dropdown.styles";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

function CartDropdown() {
  const { cart, itemsCount } = useContext(CartContext);
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
