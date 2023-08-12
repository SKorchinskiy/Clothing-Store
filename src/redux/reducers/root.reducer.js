import { combineReducers } from "redux";

import { cartReducer } from "./cart/cart.reducer";
import { categoriesReducer } from "./categories/categories.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
});

export default rootReducer;
