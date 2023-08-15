import rootReducer from "../reducers/root.reducer";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const middlewares = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares), devToolsEnhancer())
);

export const persistor = persistStore(store);
