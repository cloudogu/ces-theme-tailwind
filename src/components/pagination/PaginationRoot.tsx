import React, {useMemo} from "react";
import {PaginationContext} from "./Context";
import usePaginationControl from "./hooks/usePaginationControl";
import type {PaginationControlInput} from "@components/pagination/hooks/usePaginationControl.types";
import type {ReactNode} from "react";

export type PaginationRootProps = {
    children?: ReactNode;
    config?: PaginationControlInput;
};

export default function PaginationRoot({
    children,
    config,
}: PaginationRootProps) {
    const localState = usePaginationControl(useMemo(() => ({
        allLineCount: config?.allLineCount,
        defaultLinesPerPage: config?.defaultLinesPerPage,
        defaultStartPage: config?.defaultStartPage,
        lineCountOptions: config?.lineCountOptions,
        loadDataFunction: (config as PaginationControlInput)?.loadDataFunction,
    }), [
        config,
    ]));

    const actualState = useMemo(() => ({...localState, ...config}), [localState, config]);

    return (
        <PaginationContext.Provider value={{...actualState}}>
            {children}
        </PaginationContext.Provider>
    );
}
