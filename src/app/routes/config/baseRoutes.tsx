import React from "react";
import {Convertor} from "../../../pages/convertor";
import {AllCurrencies} from "../../../pages/allCurrencies";

export const BASE_ROUTES = [
    {
        path: "/",
        element: <Convertor/>,
    },
    {
        path: "currencies",
        element: <AllCurrencies/>,
    },
    {
        path: "*",
        element: (<div>No page!</div>),
    }
]