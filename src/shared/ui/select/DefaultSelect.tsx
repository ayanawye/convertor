import { FC } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { IFormatedCurrency } from "shared/interfaces";

interface Props {
  label?: string;
  options: IFormatedCurrency[];
  defaultValue: IFormatedCurrency;
  handleChange: (currency: IFormatedCurrency) => void;
  width: number;
}

export const DefaultSelect: FC<Props> = (props) => {
  const {label, handleChange, options, width, defaultValue} = props;

  return (
    <div className="select">
      <Autocomplete
        disablePortal
        disableClearable
        value={defaultValue}
        id="controllable-states-demo"
        options={options}
        sx={{
          width: width,
          height: 48,
          "& .MuiInputBase-root": {
            height: 48,
            minHeight: 48,
          },
        }}
        onChange={(_, newValue: IFormatedCurrency) => {
          handleChange(newValue || {value: 0, label: ''});
        }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </div>
  );
};
