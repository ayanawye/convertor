import { createSlice } from "@reduxjs/toolkit";

import { IInitialState } from "./types";
import { RootState } from "app/redux/hooks";
import {getConversionRate} from "../api/requests";

const initialState: IInitialState = {
  conversionRate: null,
  isConversionRateLoading: false,
  errorConversionRate: '',
};

export const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getConversionRate.fulfilled, (state, action) => {
        state.conversionRate = action.payload.conversion_rate;
        state.isConversionRateLoading = false;
        state.errorConversionRate = "";
      })
      .addCase(getConversionRate.pending, (state) => {
        state.isConversionRateLoading = true;
        state.errorConversionRate = "";
      })
      .addCase(getConversionRate.rejected, (state, action) => {
        state.isConversionRateLoading = false;
        state.errorConversionRate = action.payload as string;
      });
  },
});

export const converterSelector = (state: RootState) => state.converter;
