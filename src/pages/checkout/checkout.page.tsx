import {
  EmptyCart,
  CartItemsHeader,
  CartItemsContainer,
  CheckoutPageContainer,
  CheckoutResumeContainer,
} from "./checkout.styles";

import {
  addToCartAction,
  removeFromCartAction,
  clearItemFromCartAction,
} from "../../redux/actions/cart/cart.action";

import CartItem, {
  CartItemType,
} from "../../components/cart-item/cart-item.component";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotalPrice,
} from "../../redux/selectors/cart.selector";
import PaymentForm from "../../components/payment-form/payment-form.component";
import { useCallback, useEffect, useState } from "react";

function Checkout() {
  const [clientSecret, setClientSecret] = useState("");

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const itemsCount = useSelector(selectCartItemsCount);

  useEffect(() => {
    fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalPrice }),
    })
      .then((response) => response.json())
      .then((data) => {
        return setClientSecret(data.clientSecret);
      });
  }, [totalPrice]);

  const increaseItemQuantity = useCallback(
    (cartItem: CartItemType) => dispatch(addToCartAction(cartItems, cartItem)),
    [cartItems, dispatch]
  );
  const decreaseItemQuantity = useCallback(
    (cartItem: CartItemType) =>
      dispatch(removeFromCartAction(cartItems, cartItem)),
    [cartItems, dispatch]
  );
  const clearItemFromCart = useCallback(
    (cartItem: CartItemType) =>
      dispatch(clearItemFromCartAction(cartItems, cartItem)),
    [cartItems, dispatch]
  );

  return (
    <CheckoutPageContainer>
      <CartItemsHeader>
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </CartItemsHeader>
      <CartItemsContainer>
        {itemsCount ? (
          cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              increaseItemQuantity={increaseItemQuantity}
              decreaseItemQuantity={decreaseItemQuantity}
              clearItemFromCart={clearItemFromCart}
            />
          ))
        ) : (
          <EmptyCart>No items were added to cart!</EmptyCart>
        )}
      </CartItemsContainer>
      <CheckoutResumeContainer>
        <span>Total Price: ${totalPrice}</span>
      </CheckoutResumeContainer>
      <PaymentForm clientSecret={clientSecret} />
    </CheckoutPageContainer>
  );
}

export default Checkout;
