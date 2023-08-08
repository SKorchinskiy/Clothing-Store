import "./cart-dropdown.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

function CartDropdown() {
  const { cart, itemsCount } = useContext(CartContext);
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
      />
    </div>
  );
}

export default CartDropdown;
