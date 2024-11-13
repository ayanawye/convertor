import { configureStore } from "@reduxjs/toolkit";
import { currencySlice } from "../../entities/currency";

const store = configureStore({
  reducer: {
    allCurrencies: currencySlice.reducer,
  },
});

export default store;
