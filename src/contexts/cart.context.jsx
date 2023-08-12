import { createContext, useReducer } from "react";

import { cartReducer } from "../redux/reducers/cart/cart.reducer";

import { CART_ACTION_TYPES } from "../redux/actions/cart/cart.type";

export const CartContext = createContext({
  cart: [],
  itemsCount: 0,
  totalPrice: 0,
  isCartOpen: false,
  setIsCartOpen: () => false,
  clearFromCart: () => [],
  addItemToCart: () => [],
  removeItemFromCart: () => [],
});

const INITIAL_CART_STATE = {
  cart: [],
  itemsCount: 0,
  totalPrice: 0,
  isCartOpen: false,
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);

  const { cart, itemsCount, totalPrice, isCartOpen } = state;

  const updateCart = (updatedCart) => {
    const updatedTotalPrice = updatedCart.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    const updatedItemsCount = updatedCart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    dispatch({
      type: CART_ACTION_TYPES.SET_ITEM,
      payload: {
        updatedCart,
        updatedTotalPrice,
        updatedItemsCount,
      },
    });
  };

  const toggleCart = (isOpen) => {
    dispatch({ type: "TOGGLE_CART", payload: isOpen });
  };

  const addItemToCart = (item) => updateCart(addToCart(cart, item));
  const removeItemFromCart = (item) => updateCart(removeFromCart(cart, item));
  const clearFromCart = (item) => updateCart(clearItemFromCart(cart, item));

  const setIsCartOpen = (isOpen) => toggleCart(isOpen);

  const value = {
    cart,
    itemsCount,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    clearFromCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
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
