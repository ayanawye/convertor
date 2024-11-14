import React, { FC } from "react";
import { ListItem, ListItemText } from "@mui/material";
import s from "./DefaultListItem.module.scss";

interface Props {
  currency: string;
  nominal: number;
}

export const DefaultListItem: FC<Props> = ({ currency, nominal }) => {
  return (
    <ListItem disablePadding className={s.listItem}>
        <ListItemText primary={nominal} />
        <ListItemText primary={currency} />
    </ListItem>
  );
};
