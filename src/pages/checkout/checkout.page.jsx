import {
  EmptyCart,
  CartItemsHeader,
  CartItemsContainer,
  CheckoutPageContainer,
  CheckoutResumeContainer,
} from "./checkout.styles";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CartItem from "../../components/cart-item/cart-item.component";

function Checkout() {
  const { cart, itemsCount, totalPrice } = useContext(CartContext);

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
          cart.map((cartItem) => (
            <CartItem key={cartItem.key} cartItem={cartItem} />
          ))
        ) : (
          <EmptyCart>No items were added to cart!</EmptyCart>
        )}
      </CartItemsContainer>
      <CheckoutResumeContainer>
        <span>Total Price: ${totalPrice}</span>
      </CheckoutResumeContainer>
    </CheckoutPageContainer>
  );
}

export default Checkout;
