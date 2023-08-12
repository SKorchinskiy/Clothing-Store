import { CART_ACTION_TYPES } from "../../actions/cart/cart.type";

const INITIAL_CART_STATE = {
  cart: [],
  itemsCount: 0,
  totalPrice: 0,
  isCartOpen: false,
};

export function cartReducer(state = INITIAL_CART_STATE, action) {
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
      return state;
    }
  }
}
