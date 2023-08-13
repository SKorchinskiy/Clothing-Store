import { CART_ACTION_TYPES } from "./cart.type";
import { createAction } from "../create-action.helper";

export function addToCartAction(cartItems, itemToAdd) {
  const updatedCartItems = addToCart(cartItems, itemToAdd);
  return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, updatedCartItems);
}

function addToCart(cartItems, itemToAdd) {
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

export function removeFromCartAction(cartItems, itemToRemove) {
  const updatedCartItems = removeFromCart(cartItems, itemToRemove);
  return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, updatedCartItems);
}

function removeFromCart(cartItems, itemToRemove) {
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

export function clearItemFromCartAction(cartItems, itemToClear) {
  const updatedCartItems = clearItemFromCart(cartItems, itemToClear);
  return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, updatedCartItems);
}

function clearItemFromCart(cartItems, itemToClear) {
  return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
}

export function toggleCartIsOpen(isOpen) {
  return createAction("TOGGLE_CART", isOpen);
}
