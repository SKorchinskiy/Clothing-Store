import "./cart-item.styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../redux/selectors/cart.selector";
import {
  addToCartAction,
  removeFromCartAction,
  clearItemFromCartAction,
} from "../../redux/actions/cart/cart.action";

function CartItem({ cartItem }) {
  const { imageUrl, name, quantity, price } = cartItem;

  const dispatch = useDispatch();
  const { cart } = useSelector(cartSelector);

  const increaseItemQuantity = () => dispatch(addToCartAction(cart, cartItem));
  const decreaseItemQuantity = () =>
    dispatch(removeFromCartAction(cart, cartItem));
  const clearItemFromCart = () =>
    dispatch(clearItemFromCartAction(cart, cartItem));

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
