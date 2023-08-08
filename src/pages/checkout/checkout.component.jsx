import "./checkout.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../../components/cart-item/cart-item.component";

function Checkout() {
  const { cart, itemsCount, totalPrice } = useContext(CartContext);

  return (
    <div className="checkout-page-container">
      <div className="cart-items-header">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      <div className="cart-items-container">
        {itemsCount ? (
          cart.map((cartItem) => (
            <CartItem key={cartItem.key} cartItem={cartItem} />
          ))
        ) : (
          <div className="empty-cart">No items were added to cart!</div>
        )}
      </div>
      <div className="checkout-resume-container">
        <span>Total Price: ${totalPrice}</span>
      </div>
    </div>
  );
}

export default Checkout;
