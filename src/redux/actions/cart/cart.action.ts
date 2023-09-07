import { CART_ACTION_TYPES } from "./cart.type";
import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../create-action.helper";
import { CartItem } from "../../reducers/cart/cart.reducer";

export type UpdateCartItems = ActionWithPayload<
  CART_ACTION_TYPES.UPDATE_CART_ITEMS,
  CartItem[]
>;

export const updateCartItems = withMatcher(
  (updatedCartItems: CartItem[]): UpdateCartItems =>
    createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, updatedCartItems)
);

export function addToCartAction(cartItems: CartItem[], itemToAdd: CartItem) {
  const updatedCartItems = addToCart(cartItems, itemToAdd);
  return updateCartItems(updatedCartItems);
}

function addToCart(cartItems: CartItem[], itemToAdd: CartItem) {
  const itemExists = cartItems.some((cartItem) => cartItem.id === itemToAdd.id);
  if (itemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
}

export function removeFromCartAction(
  cartItems: CartItem[],
  itemToRemove: CartItem
) {
  const updatedCartItems = removeFromCart(cartItems, itemToRemove);
  return updateCartItems(updatedCartItems);
}

function removeFromCart(cartItems: CartItem[], itemToRemove: CartItem) {
  const itemQuantity = cartItems.reduce(
    (total, cartItem) =>
      cartItem.id === itemToRemove.id ? cartItem.quantity : total,
    0
  );

  if (itemQuantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
}

export function clearItemFromCartAction(
  cartItems: CartItem[],
  itemToClear: CartItem
) {
  const updatedCartItems = clearItemFromCart(cartItems, itemToClear);
  return updateCartItems(updatedCartItems);
}

function clearItemFromCart(cartItems: CartItem[], itemToClear: CartItem) {
  return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
}

export type ToggleCartIsOpen = ActionWithPayload<
  CART_ACTION_TYPES.TOGGLE_CART,
  boolean
>;

export const toggleCartIsOpen = withMatcher(
  (isOpen: boolean): ToggleCartIsOpen =>
    createAction(CART_ACTION_TYPES.TOGGLE_CART, isOpen)
);
