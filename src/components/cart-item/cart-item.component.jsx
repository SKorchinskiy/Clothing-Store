import { useContext } from "react";
import "./cart-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";

function CartItem({ cartItem }) {
  const { imageUrl, name, quantity, price } = cartItem;

  const { addItemToCart, removeItemFromCart, clearFromCart } =
    useContext(CartContext);

  const increaseItemQuantity = () => addItemToCart(cartItem);
  const decreaseItemQuantity = () => removeItemFromCart(cartItem);
  const clearItemFromCart = () => clearFromCart(cartItem);

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <div className="cart-item-element">{name}</div>
        <div className="cart-item-element">
          <div className="arrow" onClick={decreaseItemQuantity}>
            &#10092;
          </div>
          {quantity}
          <div className="arrow" onClick={increaseItemQuantity}>
            &#10093;
          </div>
        </div>
        <div className="cart-item-element">${price}</div>
        <div className="cart-item-element">
          <div className="remove-btn" onClick={clearItemFromCart}>
            &#10005;
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
