import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IGetCurrencies } from "../model/types";

export const getAllCurrencies = createAsyncThunk<
  IGetCurrencies,
  undefined,
  { rejectValue: string }
>("currencies/getAllCurrencies", async (_, { rejectWithValue }) => {
  try {
    const resp = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/latest/USD`);
    return resp.data;
  } catch (error) {
    return rejectWithValue("Failed to fetch currencies");
  }
});

export const getBaseRateCurrencies = createAsyncThunk<
  IGetCurrencies,
  string,
  { rejectValue: string }
>(
  "currencies/getBaseRateCurrencies",
  async (base_currency, { rejectWithValue }) => {
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/latest/${base_currency}`,
      );
      return resp.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch currencies");
    }
  },
);
