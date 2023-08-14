import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import router from "./routes/index";
import { store, persistor } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
