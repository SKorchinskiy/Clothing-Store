import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import { devToolsEnhancer } from "@redux-devtools/extension";

import rootSaga from "../sagas/root.saga";
import rootReducer from "../reducers/root.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares), devToolsEnhancer())
);
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { store, persistor };
