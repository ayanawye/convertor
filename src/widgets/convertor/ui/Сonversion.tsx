import React, { useEffect, useState } from "react";
import {
  DefaultSelect,
  EnterCurrencyInput,
  GridContainer,
} from "../../../shared/ui";
import Grid from "@mui/material/Grid2";
import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks";
import {
  currenciesSelector,
  getAllCurrencies,
} from "../../../entities/currency";
import { IFormatedCurrency } from "../../../shared/interfaces";
import { currenciesFormated } from "../../../features/baseCurrencySelect";

export const Conversion = () => {
  const dispatch = useAppDispatch();
  const [initialValue, setInitialValue] = useState("");
  const [equivalentValue] = useState("");
  const [initialCurrency, setInitialCurrency] =
    useState<IFormatedCurrency | null>(null);
  const [equivalentCurrency, setEquivalentCurrency] =
    useState<IFormatedCurrency | null>(null);
  const { currencies } = useAppSelector(currenciesSelector);
  const [formatedCurrencies, setFormatedCurrencies] = useState<
    IFormatedCurrency[]
  >([]);

  useEffect(() => {
    setFormatedCurrencies(currenciesFormated(currencies));
  }, [currencies]);

  useEffect(() => {
    dispatch(getAllCurrencies());
  }, []);

  return (
    <>
      <GridContainer
        marginBottom={4}
        marginTop={4}
        justifyContent={"center"}
        spacing={2}
      >
        <Grid size={4}>
          <EnterCurrencyInput value={initialValue} setValue={setInitialValue} />
        </Grid>
        <Grid size={4}>
          <DefaultSelect
            options={formatedCurrencies}
            handleChange={setInitialCurrency}
            label="Initial currency"
          />
        </Grid>
      </GridContainer>
      <GridContainer justifyContent={"center"} spacing={2}>
        <Grid size={4}>
          <EnterCurrencyInput disabled value={equivalentValue} />
        </Grid>
        <Grid size={4}>
          <DefaultSelect
            options={formatedCurrencies}
            handleChange={setEquivalentCurrency}
            label="The equivalent"
          />
        </Grid>
      </GridContainer>
    </>
  );
};
