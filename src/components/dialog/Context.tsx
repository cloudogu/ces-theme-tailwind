import {createContext, useContext} from "react";

export type Variant = "standard" | "danger"

export const VariantContext = createContext<Variant | null>(null);

export function useVariantContext() {
    const context = useContext(VariantContext);

    if(!context){
        throw new Error("no VariantContext provided for useVariantContext");
    }

    return context;
}

