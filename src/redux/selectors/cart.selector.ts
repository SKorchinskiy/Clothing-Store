import { createSelector } from "reselect";
import { CartState } from "../reducers/cart/cart.reducer";
import { RootState } from "../store/store";

const selectCartSlice = (store: RootState): CartState => store.cart;

export const selectIsCartOpen = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.cartItems
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (total, { price, quantity }) => total + price * quantity,
      0
    )
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, { quantity }) => total + quantity, 0)
);
