import { ICurrency } from "shared/interfaces";

export const formatCurrencies = (currencies: ICurrency) => {
  if (!currencies) {
    return [];
  }
  return Object.entries(currencies).map(([label, value]) => ({
    label,
    value,
  }));
};
