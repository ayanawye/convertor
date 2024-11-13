import { ICurrency, IFormatedCurrency } from "../../../shared/interfaces";

export interface IInitialState {
  currencies: ICurrency;
  isLoading: boolean;
  error: string;
  baseCurrency: IFormatedCurrency;
  baseRateCurrencies: ICurrency;
  isBaseCurrencyLoading: boolean;
  errorBaseCurrency: string;
}

export interface IGetCurrencies {
  base_code: string;
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: string;
  time_last_update_utc: string;
  time_next_update_unix: string;
  time_next_update_utc: string;
  conversion_rates: {
    [key: string]: number;
  };
}
