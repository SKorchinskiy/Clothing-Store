import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";

import router from "./routes/index";
import { UserProvider } from "./contexts/user.context";
import { ProductProvider } from "./contexts/product.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>
);
