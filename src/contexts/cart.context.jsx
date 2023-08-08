import { createContext, useState } from "react";

export const CartContext = createContext({
  itemsCount: 0,
  setItemsCount: () => 0,
  cart: [],
  addItemToCart: () => [],
  removeItemFromCart: () => [],
});

export function CartProvider({ children }) {
  const [itemsCount, setItemsCount] = useState(0);
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setItemsCount(itemsCount + 1);
    setCart(addToCart(cart, item));
  };

  const removeItemFromCart = (item) => {
    setItemsCount(itemsCount - 1);
    setCart(removeFromCart(cart, item));
  };

  const value = {
    itemsCount,
    cart,
    addItemToCart,
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
