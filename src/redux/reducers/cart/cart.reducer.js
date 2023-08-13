import { CART_ACTION_TYPES } from "../../actions/cart/cart.type";

const INITIAL_CART_STATE = {
  cartItems: [],
  isCartOpen: false,
};

export function cartReducer(state = INITIAL_CART_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.UPDATE_CART_ITEMS: {
      return {
        ...state,
        cartItems: payload,
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
