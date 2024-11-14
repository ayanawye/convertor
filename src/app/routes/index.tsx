import React, { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootLayout } from "widgets/rootLayout";
import { BASE_ROUTES } from "./config/baseRoutes";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <RootLayout />,
      children: [...BASE_ROUTES],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
    },
  },
);

const AppRouter: FC = () => {
  return (
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    />
  );
};

export default AppRouter;
