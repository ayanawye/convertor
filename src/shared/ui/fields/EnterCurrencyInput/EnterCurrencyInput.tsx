import { TextField } from "@mui/material";
import { FC } from "react";

interface Props {
  disabled?: boolean;
  value: string;
  setValue?: (value: string) => void | undefined;
}

export const EnterCurrencyInput: FC<Props> = ({
  disabled,
  value,
  setValue = () => {},
}) => {
  return (
    <TextField
      disabled={disabled}
      id="outlined-size-small"
      label="Number"
      type="number"
      variant="filled"
      size="small"
      value={value}
      onChange={(e) => setValue(e.target.value || "")}
    />
  );
};
