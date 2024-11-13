import React, { FC } from "react";
import { List } from "@mui/material";
import { DefaultListItem } from "../DefaultListItem/DefaultListItem";
import { IFormatedCurrency } from "../../../interfaces";

interface Props {
  list: IFormatedCurrency[];
  loading: boolean;
}
export const DefaultList: FC<Props> = ({ list, loading }) => {
  if (loading) {
    return <>Loading....</>;
  }
  if (list.length === 0 && !loading) {
    return <>Empty!</>;
  }

  return (
    <List>
      {list.map((item, index) => (
        <DefaultListItem
          text={`${item.value} ${item.label.toLowerCase()}`}
          key={index}
        />
      ))}
    </List>
  );
};
