import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "../redux/reducers/root.reducer";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = createStore(rootReducer, preloadedState),
    ...options
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...options }) };
}

export default renderWithProviders;
