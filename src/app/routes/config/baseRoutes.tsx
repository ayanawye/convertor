import React, { lazy, Suspense } from "react";

const Convertor = lazy(() =>
  import("../../../pages/convertor").then((module) => ({
    default: module.Convertor,
  })),
);

const AllCurrencies = lazy(() =>
  import("../../../pages/allCurrencies").then((module) => ({
    default: module.AllCurrencies,
  })),
);

export const BASE_ROUTES = [
  {
    path: "/",
    element: (
      <Suspense>
        <Convertor />
      </Suspense>
    ),
  },
  {
    path: "currencies",
    element: (
      <Suspense>
        <AllCurrencies />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <div>No page!</div>,
  },
];
