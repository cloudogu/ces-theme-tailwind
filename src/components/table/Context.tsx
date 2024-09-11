import {usePaginationContext} from "@components/pagination/Context";
import {createContext, useContext} from "react";
import type { ActionTableControl } from "./ActionTableRoot.types";

export const ActionTableContext = createContext<{isLoading: boolean} | null>(null);

export function useActionTableContext(): ActionTableControl {
    const atCtx = useContext(ActionTableContext);
    if (!atCtx) {
        throw new Error("You cannot use this component outside of ActionTableRoot.");
    }

    const pgCtx = usePaginationContext();
    if (!pgCtx) {
        throw new Error("You cannot use this component outside of ActionTableRoot.");
    }

    return {...atCtx, paginationControl: pgCtx};
}
