import {
  EmptyCart,
  CartItemsHeader,
  CartItemsContainer,
  CheckoutPageContainer,
  CheckoutResumeContainer,
} from "./checkout.styles";

import CartItem from "../../components/cart-item/cart-item.component";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/selectors/cart.selector";

function Checkout() {
  const { cart, itemsCount, totalPrice } = useSelector(cartSelector);

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
