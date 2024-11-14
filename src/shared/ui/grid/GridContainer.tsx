import React, { FC } from "react";
import Grid from "@mui/material/Grid2";

interface Props {
  justifyContent?: string;
  marginBottom?: number;
  marginTop?: number;
  spacing: number;
  children?: React.ReactNode;
  className?: string;
}

export const GridContainer: FC<Props> = (props) => {
  return (
    <Grid container {...props}>
      {props.children}
    </Grid>
  );
};
