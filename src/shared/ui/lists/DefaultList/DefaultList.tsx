import React, { FC } from "react";
import List from "@mui/material/List";
import { DefaultListItem } from "../DefaultListItem/DefaultListItem";
import { IFormatedCurrency } from "shared/interfaces";
import s from './DefaultList.module.scss';

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
    <List className={s.list}>
      {list.map(({ label, value }, index) => (
        <DefaultListItem
          currency={label}
          nominal={value}
          key={index}
        />
      ))}
    </List>
  );
};
