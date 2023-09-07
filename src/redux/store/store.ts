import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
  Middleware,
} from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import { devToolsEnhancer } from "@redux-devtools/extension";

import rootSaga from "../sagas/root.saga";
import rootReducer from "../reducers/root.reducer";

export type RootState = ReturnType<typeof rootReducer>;

export type CustomPersistConfig = PersistConfig<RootState> & {
  whitelist: [keyof RootState];
};

const persistConfig: CustomPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [sagaMiddleware];

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares), devToolsEnhancer())
);
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { store, persistor };
