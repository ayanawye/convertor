import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./types";
import { getAllCurrencies, getBaseRateCurrencies } from "../api/requests";
import { RootState } from "../../../app/redux/hooks";

const initialState: IInitialState = {
  currencies: {},
  isLoading: false,
  error: "",
  baseCurrency: { value: 0, label: "USD" },
  baseRateCurrencies: {},
  isBaseCurrencyLoading: false,
  errorBaseCurrency: "",
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCurrencies.fulfilled, (state, action) => {
        state.currencies = action.payload.conversion_rates;
        state.isLoading = false;
        state.error = "";
      })
      .addCase(getAllCurrencies.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(getAllCurrencies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(getBaseRateCurrencies.fulfilled, (state, action) => {
        state.baseRateCurrencies = action.payload.conversion_rates;
        state.isBaseCurrencyLoading = false;
        state.errorBaseCurrency = "";
      })
      .addCase(getBaseRateCurrencies.pending, (state) => {
        state.isBaseCurrencyLoading = true;
        state.errorBaseCurrency = "";
      })
      .addCase(getBaseRateCurrencies.rejected, (state, action) => {
        state.isBaseCurrencyLoading = false;
        state.errorBaseCurrency = action.payload as string;
      });
  },
});

export const { changeBaseCurrency } = currencySlice.actions;
export const currenciesSelector = (state: RootState) => state.allCurrencies;
