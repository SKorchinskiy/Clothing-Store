import rootReducer from "../reducers/root.reducer";
import { legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
