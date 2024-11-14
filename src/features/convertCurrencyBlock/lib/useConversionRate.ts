import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { converterSelector, getConversionRate } from "entities/converter";

interface Props {
    fromCurrency: string,
    toCurrency: string;
}

export function useConversionRate({ fromCurrency, toCurrency }: Props) {
    const dispatch = useAppDispatch();
    const { conversionRate  } = useAppSelector(converterSelector);

    useEffect(() => {
        dispatch(getConversionRate({ fromCurrency, toCurrency }));
    }, [dispatch, fromCurrency, toCurrency]);


    return {
        conversionRate,
    };
}
