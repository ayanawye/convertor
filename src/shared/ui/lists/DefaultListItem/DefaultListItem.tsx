import React, { FC } from "react";
import { ListItem, ListItemText } from "@mui/material";

interface Props {
  text: string;
}

export const DefaultListItem: FC<Props> = ({ text }) => {
  return (
    <ListItem disablePadding>
      <ListItemText primary={text} />
    </ListItem>
  );
};
