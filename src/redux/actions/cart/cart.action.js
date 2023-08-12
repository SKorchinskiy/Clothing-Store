import { createAction } from "../create-action.helper";

export function addToCartAction(cart, itemToAdd) {
  const updatedCart = addToCart(cart, itemToAdd);
  return createAction("SET_ITEM", updateCartValues(updatedCart));
}

export function removeFromCartAction(cart, itemToRemove) {
  const updatedCart = removeFromCart(cart, itemToRemove);
  return createAction("SET_ITEM", updateCartValues(updatedCart));
}

export function clearItemFromCartAction(cart, itemToClear) {
  const updatedCart = clearItemFromCart(cart, itemToClear);
  return createAction("SET_ITEM", updateCartValues(updatedCart));
}

export function toggleCartIsOpen(isOpen) {
  return createAction("TOGGLE_CART", isOpen);
}

function updateCartValues(updatedCart) {
  const updatedTotalPrice = updatedCart.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );
  const updatedItemsCount = updatedCart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return {
    updatedCart,
    updatedTotalPrice,
    updatedItemsCount,
  };
}

function addToCart(cart, itemToAdd) {
  const itemExists = cart.some((cartItem) => cartItem.id === itemToAdd.id);
  if (itemExists) {
    return cart.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cart, { ...itemToAdd, quantity: 1 }];
}

function removeFromCart(cart, itemToRemove) {
  const itemQuantity = cart.reduce(
    (total, cartItem) =>
      cartItem.id === itemToRemove.id ? cartItem.quantity : total,
    0
  );

  if (itemQuantity === 1) {
    return cart.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cart.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
}

function clearItemFromCart(cart, itemToClear) {
  return cart.filter((cartItem) => cartItem.id !== itemToClear.id);
}
