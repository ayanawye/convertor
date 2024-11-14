import React, { FC, useEffect } from "react";

import { DefaultSelect } from "shared/ui";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { IFormatedCurrency } from "shared/interfaces";
import { changeBaseCurrency, currenciesSelector, getBaseRateCurrencies } from "entities/currency";

export const BaseCurrencySelect: FC = () => {
  const dispatch = useAppDispatch();
  const { baseCurrency, currencies } = useAppSelector(currenciesSelector);

  useEffect(() => {
    dispatch(getBaseRateCurrencies(baseCurrency.label));
  }, []);

  const handleChange = (currency: IFormatedCurrency | null) => {
    dispatch(changeBaseCurrency(currency));
    dispatch(getBaseRateCurrencies(currency?.label || ""));
  };

  return (
    <DefaultSelect
      defaultValue={baseCurrency}
      width={150}
      options={currencies}
      label="Base currency"
      handleChange={handleChange}
    />
  );
};
