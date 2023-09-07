import { AnyAction } from "redux";

import {
  toggleCartIsOpen,
  updateCartItems,
} from "../../actions/cart/cart.action";

export type CartItem = {
  id: number;
  name: string;
  imageUrl: string;
  quantity: number;
  price: number;
};

export type CartState = {
  cartItems: CartItem[];
  isCartOpen: boolean;
};

const INITIAL_CART_STATE: CartState = {
  cartItems: [],
  isCartOpen: false,
};

export function cartReducer(state = INITIAL_CART_STATE, action: AnyAction) {
  if (updateCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  if (toggleCartIsOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  return state;
}
