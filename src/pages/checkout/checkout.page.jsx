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

function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const itemsCount = useSelector(selectCartItemsCount);

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
    </CheckoutPageContainer>
  );
}

export default Checkout;
