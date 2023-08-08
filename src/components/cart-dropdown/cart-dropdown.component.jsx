import "./cart-dropdown.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

function CartDropdown() {
  const { cart, itemsCount } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => navigate("/checkout");

  return (
    <div className="cart-dropdown-container">
      {itemsCount ? (
        cart.map((cartItem) => (
          <div key={cartItem.id} className="dropdown-item-container">
            <img src={cartItem.imageUrl} alt={cartItem.name} />
            <div className="dropdown-item-details">
              <div>{cartItem.name}</div>
              <div>
                {cartItem.quantity} x ${cartItem.price}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="empty-cart">Cart is empty!</div>
      )}
      <Button
        type="button"
        value="Go To Checkout"
        additionalClasses="default-btn"
        onClick={goToCheckout}
      />
    </div>
  );
}

export default CartDropdown;
