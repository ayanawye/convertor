import { IFormatedCurrency } from "shared/interfaces";

export interface IInitialState {
  currencies: IFormatedCurrency[];
  isLoading: boolean;
  error: string;
  baseCurrency: IFormatedCurrency;
  baseRateCurrencies: IFormatedCurrency[];
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
