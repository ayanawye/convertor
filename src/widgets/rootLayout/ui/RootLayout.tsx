import React, {FC} from "react";
import {NavLink, Outlet} from "react-router-dom";

export const RootLayout: FC = () => {
    return (
        <div>
            <NavLink to='/'>Convertor</NavLink>
            <NavLink to='/currencies'>Currencies</NavLink>
            <Outlet/>
        </div>
    )
}