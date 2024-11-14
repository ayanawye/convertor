import React, { FC, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import { DefaultList, GridContainer } from "shared/ui";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { currenciesSelector, getAllCurrencies } from "entities/currency";
import { BaseCurrencySelect } from "features/baseCurrencySelect";
import {Loading} from "shared/ui";
import s from './CurrenciesList.module.scss';

export const CurrenciesList: FC = () => {
  const dispatch = useAppDispatch();
  const { baseRateCurrencies, isBaseCurrencyLoading, isLoading } = useAppSelector(currenciesSelector);

  useEffect(() => {
    dispatch(getAllCurrencies());
  }, []);

  if (isLoading) {
      return <Loading />;
  }

  return (
    <GridContainer className={s.currencies} justifyContent={"center"} spacing={2}>
      <Grid display={'contents'} size={5}>
        <BaseCurrencySelect />
      </Grid>
      <Grid height={'70vh'} overflow={'scroll'} size={7}>
        <DefaultList
          loading={isBaseCurrencyLoading}
          list={baseRateCurrencies}
        />
      </Grid>
    </GridContainer>
  );
};
