import React, { FC, useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  BaseCurrencySelect,
  currenciesFormated,
} from "../../../features/baseCurrencySelect";
import { DefaultList, GridContainer } from "../../../shared/ui";
import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks";
import {
  currenciesSelector,
  getAllCurrencies,
} from "../../../entities/currency";
import { IFormatedCurrency } from "../../../shared/interfaces";

export const CurrenciesList: FC = () => {
  const dispatch = useAppDispatch();
  const [formatedCurrencies, setFormatedCurrencies] = useState<
    IFormatedCurrency[]
  >([]);
  const { baseRateCurrencies, isBaseCurrencyLoading, currencies } =
    useAppSelector(currenciesSelector);

  useEffect(() => {
    dispatch(getAllCurrencies());
  }, []);

  useEffect(() => {
    setFormatedCurrencies(currenciesFormated(baseRateCurrencies));
  }, [currencies, baseRateCurrencies]);

  return (
    <GridContainer justifyContent={"center"} marginTop={4} spacing={2}>
      <Grid size={5}>
        <BaseCurrencySelect />
      </Grid>
      <Grid size={4}>
        <DefaultList
          loading={isBaseCurrencyLoading}
          list={formatedCurrencies}
        />
      </Grid>
    </GridContainer>
  );
};
