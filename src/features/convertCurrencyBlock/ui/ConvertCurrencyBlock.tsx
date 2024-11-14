import React, {FC} from "react";
import Grid from "@mui/material/Grid2";
import {DefaultSelect, EnterCurrencyInput, GridContainer} from "shared/ui";
import {IFormatedCurrency} from "shared/interfaces";
import s from './ConvertCurrencyBlock.module.scss'

interface Props {
    value: string;
    onChangeValue: (value: string) => void;
    currency: IFormatedCurrency;
    onChangeCurrency: (currency: IFormatedCurrency) => void;
    allCurrencies: IFormatedCurrency[];
    selectTitle: string;
}

export const ConvertCurrencyBlock: FC<Props> = (props) => {
    const {value, onChangeCurrency, onChangeValue, currency, allCurrencies, selectTitle} = props;

    return (
        <GridContainer
            marginBottom={4}
            marginTop={4}
            justifyContent={'space-around'}
            spacing={2}
        >
            <Grid className={s.grid_item} size={4}>
                <EnterCurrencyInput value={value} setValue={onChangeValue} />
            </Grid>
            <Grid size={4}>
                <DefaultSelect
                    width={150}
                    defaultValue={currency}
                    options={allCurrencies}
                    handleChange={onChangeCurrency}
                    label={selectTitle}
                />
            </Grid>
        </GridContainer>
    )
}