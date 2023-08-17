import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/layout.component";

import Home from "../pages/home/home.page";
import Auth from "../pages/auth/auth.page";
import Shop from "../pages/shop/shop.page";
import Checkout from "../pages/checkout/checkout.page";
import Category from "../pages/category/category.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home?",
        element: <Home />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "category/:categoryName",
        element: <Category />,
      },
    ],
  },
]);

export default router;
