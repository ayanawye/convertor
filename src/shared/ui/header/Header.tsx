import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import classNames from "classnames";

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <NavLink
        className={({ isActive }) =>
          classNames(s.link, { active_link: isActive })
        }
        to="/"
      >
        Convertor
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          classNames(s.link, { active_link: isActive })
        }
        to="/currencies"
      >
        Currencies
      </NavLink>
    </header>
  );
};
