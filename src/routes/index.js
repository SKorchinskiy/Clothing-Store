import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/layout.component";

const Home = lazy(() => import("../pages/home/home.page"));
const Auth = lazy(() => import("../pages/auth/auth.page"));
const Shop = lazy(() => import("../pages/shop/shop.page"));
const Checkout = lazy(() => import("../pages/checkout/checkout.page"));
const Category = lazy(() => import("../pages/category/category.page"));

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
