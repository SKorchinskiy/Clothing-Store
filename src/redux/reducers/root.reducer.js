import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { categoriesReducer } from "./categories/categories.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer,
});

console.log(rootReducer);

export default rootReducer;
