import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/layout.component";

import Home from "../pages/home/home.component";
import Auth from "../pages/auth/auth.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home?",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
]);

export default router;
