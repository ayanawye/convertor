import React, { useEffect, useState } from "react";

import { IFormatedCurrency } from "shared/interfaces";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { currenciesSelector, getAllCurrencies } from "entities/currency";
import {ConvertCurrencyBlock, useConversionRate} from "features/convertCurrencyBlock";
import {BASE_FROM_CURRENCY, BASE_FROM_INPUT, BASE_TO_CURRENCY, BASE_TO_INPUT} from "shared/constants";
import s from './Conversion.module.scss';

export const Conversion = () => {
  const dispatch = useAppDispatch();
  const { currencies } = useAppSelector(currenciesSelector);

  const [fromInput, setFromInput] = useState<string>(BASE_FROM_INPUT);
  const [toInput, setToInput] = useState<string>(BASE_TO_INPUT);
  const [fromCurrency, setFromCurrency] = useState<IFormatedCurrency>(BASE_FROM_CURRENCY);
  const [toCurrency, setToCurrency] = useState<IFormatedCurrency>(BASE_TO_CURRENCY);

  const { conversionRate } = useConversionRate({
    fromCurrency: fromCurrency.label,
    toCurrency: toCurrency.label,
  });

  const handleChangeFromInput = (value: string) => {
    const price = Number(value);
    setFromInput(value);
    const targetValue =
          price && conversionRate
              ? (price * conversionRate).toFixed(2)
              : null;
    setToInput(targetValue || '');
  }

  const handleChangeToInput = (value: string) => {
    const price = Number(value);
    setToInput(value);
    const baseValue =
        value && conversionRate
            ? (price / conversionRate).toFixed(2)
            : null;
    setFromInput(baseValue || '');
  }

  const setDefaultValues = () => {
    setFromInput(BASE_FROM_INPUT);
    setToInput(BASE_TO_INPUT);
  };

  const onBaseCodeChange = (value: IFormatedCurrency) => {
    setDefaultValues();
    setFromCurrency(value);
  };

  const onTargetCodeChange = (value: IFormatedCurrency) => {
    setDefaultValues();
    setToCurrency(value);
  };

  useEffect(() => {
    dispatch(getAllCurrencies())
  }, []);

  useEffect(() => {
    if (conversionRate) {
      setToInput((Number(fromInput) * conversionRate).toFixed(2));
    }
  }, [conversionRate]);

  return (
        <div className={s.conversion}>
          <ConvertCurrencyBlock value={fromInput} onChangeValue={handleChangeFromInput} allCurrencies={currencies} currency={fromCurrency} onChangeCurrency={onBaseCodeChange} selectTitle='Initial currency' />
          <ConvertCurrencyBlock value={toInput} onChangeValue={handleChangeToInput} allCurrencies={currencies} currency={toCurrency} onChangeCurrency={onTargetCodeChange} selectTitle='The equivalent'/>
        </div>
  );
};
