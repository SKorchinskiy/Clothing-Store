import {
  EmptyCart,
  CartItemsHeader,
  CartItemsContainer,
  CheckoutPageContainer,
  CheckoutResumeContainer,
} from "./checkout.styles";

import CartItem from "../../components/cart-item/cart-item.component";

import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotalPrice,
} from "../../redux/selectors/cart.selector";
import PaymentForm from "../../components/payment-form/payment-form.component";
import { useEffect, useState } from "react";

function Checkout() {
  const [clientSecret, setClientSecret] = useState("");

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
      .then((data) => setClientSecret(data.clientSecret));
  }, [totalPrice]);

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
            <CartItem key={cartItem.id} cartItem={cartItem} />
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
