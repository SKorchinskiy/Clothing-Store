const cartItem = {
  imageUrl: "testUrl",
  name: "item 1",
  quantity: 10,
  price: 140,
};

const increaseItemQuantity = jest.fn();
const decreaseItemQuantity = jest.fn();
const clearItemFromCart = jest.fn();

export {
  cartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearItemFromCart,
};
