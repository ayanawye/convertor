import { FC, useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { IFormatedCurrency } from "../../interfaces";
import { useAppSelector } from "../../../app/redux/hooks";
import { currenciesSelector } from "../../../entities/currency";
import { getDefaultCurrency } from "../../../features/baseCurrencySelect";

interface Props {
  label?: string;
  options: IFormatedCurrency[];
  handleChange: (currency: IFormatedCurrency | null) => void;
  width?: number;
}

export const DefaultSelect: FC<Props> = ({
  label,
  handleChange,
  options,
  width,
}) => {
  const { baseCurrency } = useAppSelector(currenciesSelector);

  return (
    <div className="select">
      <Autocomplete
        disablePortal
        disableClearable
        value={baseCurrency}
        defaultValue={baseCurrency}
        id="controllable-states-demo"
        options={options}
        sx={{
          width: width || 300,
          height: 48,
          "& .MuiInputBase-root": {
            height: 48,
            minHeight: 48,
          },
        }}
        onChange={(_, newValue: IFormatedCurrency | null) => {
          handleChange(newValue || null);
        }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </div>
  );
};
