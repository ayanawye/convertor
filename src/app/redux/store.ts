import { configureStore } from "@reduxjs/toolkit";
import { currencySlice } from "entities/currency";
import {converterSlice} from "entities/converter";

const store = configureStore({
  reducer: {
    allCurrencies: currencySlice.reducer,
    converter: converterSlice.reducer,
  },
});

export default store;
