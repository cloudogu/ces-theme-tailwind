import {createContext, useContext} from "react";
import type {PaginationControl} from "@components/pagination/hooks/usePaginationControl.types";

export const PaginationContext = createContext<PaginationControl | null>(null);

export function usePaginationContext(): PaginationControl {
    const ctx = useContext(PaginationContext);
    if (!ctx) {
        throw new Error("You cannot use this component outside of PaginationRoot.");
    }

    return ctx;
}