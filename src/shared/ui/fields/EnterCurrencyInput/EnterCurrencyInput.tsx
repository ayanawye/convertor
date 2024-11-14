import { FC } from "react";
import TextField from "@mui/material/TextField";

interface Props {
  disabled?: boolean;
  value: string;
  setValue?: (value: string) => void | undefined;
}

export const EnterCurrencyInput: FC<Props> = (props) => {
  const { disabled, value, setValue = () => {},} = props;

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
