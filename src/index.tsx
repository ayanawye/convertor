import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./app/routes";
import "../src/shared/style/index.scss";
import { Provider } from "react-redux";
import store from "./app/redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
);
