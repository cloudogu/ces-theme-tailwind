import {createContext, useContext} from "react";

export type Variant = "neutral" | "brand" | "danger"

export const VariantContext = createContext<Variant | null | undefined>(null);

export function useVariantContext() {
    const context = useContext(VariantContext);

    if(!context){
        throw new Error("no VariantContext provided for useVariantContext");
    }

    return context;
}