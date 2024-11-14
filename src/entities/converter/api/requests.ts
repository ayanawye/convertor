import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { ICurrencyRate } from "../model/types";

export const getConversionRate = createAsyncThunk<
    ICurrencyRate,
    {fromCurrency: string, toCurrency: string},
    { rejectValue: string }
>(
  "converter/getCurrenciesRate",
  async ({fromCurrency, toCurrency }, { rejectWithValue }) => {
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}${process.env.REACT_APP_API_KEY}/pair/${fromCurrency}/${toCurrency}`,
      );
      return resp.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch currencies");
    }
  },
);
