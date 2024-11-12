import React, { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootLayout } from "../../widgets/rootLayout";
import { BASE_ROUTES } from "./config/baseRoutes";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [...BASE_ROUTES],
  },
]);

const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
