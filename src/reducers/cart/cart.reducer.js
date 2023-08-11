export const CART_ACTION_TYPES = {
  SET_ITEM: "SET_ITEM",
  TOGGLE_CART: "TOGGLE_CART",
};

export function cartReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_ITEM: {
      return {
        ...state,
        cart: payload.updatedCart,
        itemsCount: payload.updatedItemsCount,
        totalPrice: payload.updatedTotalPrice,
      };
    }
    case CART_ACTION_TYPES.TOGGLE_CART: {
      return {
        ...state,
        isCartOpen: payload,
      };
    }
    default: {
      throw new Error(`Unknown cart action type: ${type}`);
    }
  }
}
