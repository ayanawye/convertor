import { ICurrency, IFormatedCurrency } from "../../../shared/interfaces";

export const currenciesFormated = (currencies: ICurrency) => {
  if (!currencies) {
    return [];
  }
  return Object.entries(currencies).map(([label, value]) => ({
    label,
    value,
  }));
};

export const getDefaultCurrency = (
  currencies: ICurrency,
  baseCurrency: IFormatedCurrency,
) => {
  const initialValue = currenciesFormated(currencies)?.find(
    (currency) => currency.label === baseCurrency.label,
  );
  return initialValue;
};
