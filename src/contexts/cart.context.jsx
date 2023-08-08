import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  itemsCount: 0,
  setItemsCount: () => 0,
  cart: [],
  addItemToCart: () => [],
  removeItemFromCart: () => [],
  isCartOpen: false,
  setIsCartOpen: () => false,
  clearFromCart: () => [],
  totalPrice: 0,
  setTotalPrice: () => 0,
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const newTotalPrice = cart.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cart]);

  useEffect(() => {
    const newItemsCount = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setItemsCount(newItemsCount);
  }, [cart]);

  const addItemToCart = (item) => {
    setCart(addToCart(cart, item));
  };

  const removeItemFromCart = (item) => {
    setCart(removeFromCart(cart, item));
  };

  const clearFromCart = (item) => {
    setCart(clearItemFromCart(cart, item));
  };

  const value = {
    itemsCount,
    cart,
    addItemToCart,
    removeItemFromCart,
    clearFromCart,
    isCartOpen,
    setIsCartOpen,
    totalPrice,
    setTotalPrice,
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
