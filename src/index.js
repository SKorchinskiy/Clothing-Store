import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import router from "./routes/index";
import store from "./redux/store/store";

import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { UserProvider } from "./contexts/user.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </Provider>
  </React.StrictMode>
);
