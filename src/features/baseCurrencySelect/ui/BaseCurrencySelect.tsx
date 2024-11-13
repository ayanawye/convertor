import React, { FC, useEffect, useState } from "react";
import { DefaultSelect } from "../../../shared/ui";
import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks";
import {
  changeBaseCurrency,
  currenciesSelector,
  getBaseRateCurrencies,
} from "../../../entities/currency";
import { currenciesFormated } from "../model/currenciesFormated";
import { IFormatedCurrency } from "../../../shared/interfaces";

export const BaseCurrencySelect: FC = () => {
  const dispatch = useAppDispatch();
  const [formatedCurrencies, setFormatedCurrencies] = useState<
    IFormatedCurrency[]
  >([]);
  const { baseCurrency, currencies } = useAppSelector(currenciesSelector);

  useEffect(() => {
    dispatch(getBaseRateCurrencies(baseCurrency.label));
  }, []);

  useEffect(() => {
    setFormatedCurrencies(currenciesFormated(currencies));
  }, [currencies]);

  const handleChange = (currency: IFormatedCurrency | null) => {
    dispatch(changeBaseCurrency(currency));
    dispatch(getBaseRateCurrencies(currency?.label || ""));
  };

  return (
    <DefaultSelect
      width={250}
      options={formatedCurrencies}
      label="Base currency"
      handleChange={handleChange}
    />
  );
};
