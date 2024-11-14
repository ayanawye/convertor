import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "shared/ui";

export const RootLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
